import { Component, HostBinding, OnInit } from '@angular/core';
import { PaquetesService } from 'src/app/services/paquetes.service';
import { Paquete } from 'src/app/shared/models/paquete.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Tamano } from 'src/app/shared/models/tamanio.interface';
import { TipoPaquete } from 'src/app/shared/models/tipo-paquetes.interface';
import { Marco } from 'src/app/shared/models/marco.interface';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/scroll/scroll-strategy';
import { MarcosService } from 'src/app/services/marcos.service';

@Component({
  selector: 'app-editpaquete',
  templateUrl: './editpaquete.component.html',
  styleUrls: ['./editpaquete.component.css']
})
export class EditpaqueteComponent implements OnInit {

  @HostBinding('class') classes = "row";

  public selectedTamano = '';
  tamanos: Tamano[]=[{id: 1,nombre: '9 x 13'},{id: 2, nombre: '13 x 18'},{id: 3, nombre: '15 x 20'}];

  public selectedTipoPaquete = '';
  tipo_paqutes : TipoPaquete[] = [
                  {id: 1, nombre: 'Evento social', descripcion: 'Fiesta de despedida del aviles del tec :c no paso integrador'},
                  {id: 2, nombre: 'Sesion fotografica', descripcion: 'Sesion de fotos de furros'}];

  public selectedMarco = '';
  marcos: Marco[] = null!;
  

  isDisabled: boolean = true;
  id: string =  "";

 
  editarPaqueteForm = new FormGroup({
    id: new FormControl({value:'', disabled:true}, Validators.required),
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    descripcion: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    hrs_Video: new FormControl('', [Validators.maxLength(10)]),
    no_Fotos_Dig: new FormControl('', [Validators.required]),
    no_Fotos_Fis: new FormControl('', [Validators.required]),
    no_Fotos_Enm: new FormControl('', [Validators.required]),
    marco_id: new FormControl('', [Validators.required]), 
    tamano_id: new FormControl('', [Validators.required]),
    tipo_paquete_id: new FormControl('', [Validators.required]), 
    precio: new FormControl('', [Validators.required]), 
    url_imagen: new FormControl('', [Validators.maxLength(300)])     

  })
  

  constructor(
    private paqueteService: PaquetesService,
    private marcoService: MarcosService,
    private rutaActiva: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.getMarco();


    this.id = this.rutaActiva.snapshot.params.id;

    this.paqueteService.getPaquete(this.id).subscribe(data => {

      console.log(data)
      
      if (!data){
        this.router.navigate(["/paquetes"]);
        return
      }

      this.editarPaqueteForm.controls['id'].setValue(data.id)
      this.editarPaqueteForm.controls['nombre'].setValue(data.nombre)
      this.editarPaqueteForm.controls['descripcion'].setValue(data.descripcion)
      this.editarPaqueteForm.controls['hrs_Video'].setValue(data.hrs_Video)
      this.editarPaqueteForm.controls['no_Fotos_Dig'].setValue(data.no_Fotos_Dig)
      this.editarPaqueteForm.controls['no_Fotos_Fis'].setValue(data.no_Fotos_Fis)
      this.editarPaqueteForm.controls['no_Fotos_Enm'].setValue(data.no_Fotos_Enm)

      this.editarPaqueteForm.controls['marco_id'].setValue(data.marco_id)
      this.editarPaqueteForm.controls['tamano_id'].setValue(data.tamano_id)
      this.editarPaqueteForm.controls['precio'].setValue(data.precio)
      this.editarPaqueteForm.controls['tipo_paquete_id'].setValue(data.tipo_paquete_id)
      this.editarPaqueteForm.controls['url_imagen'].setValue(data.url_imagen)



      this.tamanos.forEach( element => {
        if (element.id == data.tamano_id){
          this.selectedTamano = element.nombre
        }
      })
      this.marcos.forEach( element => {
        if (element.id == data.marco_id){
          this.selectedMarco = element.nombre
        }
      })
      this.tipo_paqutes.forEach( element => {
        if (element.id == data.tipo_paquete_id){
          this.selectedTipoPaquete = element.nombre
        }
      })
      




    });



    

  }

  editarPaquetes(){
    
    const formValue = this.editarPaqueteForm.value;
    this.paqueteService.updatePaquete(this.id, formValue).subscribe( data => {
      if (data){
        this.toastr.success("Paquete actualizado correctamente!!!!");
      }
    })

  }

  getMarco() {
    this.marcoService.getMarcos().subscribe( data => {
        this.marcos = data
    })
  }



  getErrorMessage(field: string): string{
    let message: string = "";
    if(this.editarPaqueteForm.get(field)?.errors?.required){
      message = 'El campo no puede estar vacio';
    }else if (this.editarPaqueteForm.get(field)?.hasError('maxlength')){
      message = 'El campo sobrepasa el tamaño permitido'
    }
    return message;
  }

  isValidField(field: string){
    let campo = this.editarPaqueteForm.get(field)
    return (campo?.touched || campo?.dirty && !campo?.valid);
  }




}


