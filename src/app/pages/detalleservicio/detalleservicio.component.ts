import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FotografoService } from 'src/app/services/fotografo.service';
import { ServicioEvento } from 'src/app/shared/models/servicioevento.interface';

@Component({
  selector: 'app-detalleservicio',
  templateUrl: './detalleservicio.component.html',
  styleUrls: ['./detalleservicio.component.css']
})
export class DetalleservicioComponent implements OnInit {

  public imageSrc = 'assets/img/image-not-found.png'  

  id : string = "";
  public servicioEvento : ServicioEvento = {
    id: 0,
    cliente_id: 0,
    fotografo_id: 0,
    paquete_id: 0,
    fecha_evento: new Date(),
    direccion: "",
    marco_id: 0,
    total: 0,
    estatus_id: 0,
    pago_id: 0,
    activo: false,
    usuario_registro_id: 0,
    fecha_registro: 0,
    nombre_cliente: '',
    paquete_nombre: '',
    estatus_nombre: ''
  }

  images : string[] = [];
  public agregarImagenesForm = new FormGroup({
    //name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });


  constructor(
    private rutaActiva: ActivatedRoute,
    private fotografoService: FotografoService
  ) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.params.id;


    this.fotografoService.getServicio(this.id).subscribe( data => {
      this.servicioEvento = data
      console.log(this.servicioEvento)
    })


  }

  agregarImagenes(){


    console.log(this.agregarImagenesForm.value);

    this.fotografoService.updateImg(this.id, this.agregarImagenesForm.value).subscribe( data => {
      console.log("hola");
      console.log(data)
    } )


  }

  onImageSelected(event: any){
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
              var reader = new FileReader();
  
              reader.onload = (event:any) => {
                console.log(event.target.result);
                 this.images.push(event.target.result); 
  
                 this.agregarImagenesForm.patchValue({
                    fileSource: this.images
                 });
              }
 
              reader.readAsDataURL(event.target.files[i]);
      }
  }
  }

  /*onVideoSelected(event: any){
    const file = (event.target as HTMLInputElement).files![0];
    this.editarEmpleadoForm.patchValue({
      file: file
    });
    this.editarEmpleadoForm.get('file')?.updateValueAndValidity()

    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
			this.url = reader.result; 
		}
  }*/



}
