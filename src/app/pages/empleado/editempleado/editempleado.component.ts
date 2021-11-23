import { Component, HostBinding, OnInit } from '@angular/core';
import { Rol } from '../../../shared/models/rol.interface';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Employee } from 'src/app/shared/models/employee.interface';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editempleado',
  templateUrl: './editempleado.component.html',
  styleUrls: ['./editempleado.component.css']
})
export class EditempleadoComponent implements OnInit {

  public newFile: File =  null!;
  public url: any;

  public imageSrc = 'assets/img/image-not-found.png'   

  roles: Rol[]=[{id: 1,nombre: 'administrador'},{id: 3, nombre: 'fotografo'},{id: 4, nombre: 'recepcionista'}];
  selectedRol = '';



  isDisabled: boolean = true;
  id: string =  "";

 
  editarEmpleadoForm = new FormGroup({
    id: new FormControl({value:'', disabled:true}, Validators.required),
    nombre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    ape_pat: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    ape_mat: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    celular: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    direccion: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    correo: new FormControl('', [Validators.required, Validators.maxLength(60), Validators.email]),
    fech_nac: new FormControl({value:'', disabled:true}, Validators.required),
    rol_id: new FormControl('', [Validators.required, Validators.maxLength(20)])
  })
  

  constructor(
    private empleadosService: EmpleadosService,
    private rutaActiva: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.params.id;

    this.empleadosService.getEmpleado(this.id).subscribe(data => {

      //console.log(!data)
      
      if (!data){
        this.router.navigate(["/empleados"]);
        return
      }

      //console.log(data)
      this.editarEmpleadoForm.controls['id'].setValue(data.id)
      this.editarEmpleadoForm.controls['nombre'].setValue(data.nombre)
      this.editarEmpleadoForm.controls['ape_pat'].setValue(data.ape_pat)
      this.editarEmpleadoForm.controls['ape_mat'].setValue(data.ape_mat)
      this.editarEmpleadoForm.controls['celular'].setValue(data.celular)
      this.editarEmpleadoForm.controls['direccion'].setValue(data.direccion)
      this.editarEmpleadoForm.controls['correo'].setValue(data.correo)
      this.editarEmpleadoForm.controls['fech_nac'].setValue(data.fech_nac)
      this.editarEmpleadoForm.controls['rol_id'].setValue(data.rol_id)
      this.editarEmpleadoForm.controls['usuario_registro_id'].setValue(data.usuario_registro_id)
      //console.log(this.paquete)


      this.roles.forEach( element => {
        if (element.id == data.rol_id){
          this.selectedRol = element.nombre
        }
      })

    });
    

  }

  editarEmpleado(){
    var formData: any = new FormData();
    formData.append("nombre", this.editarEmpleadoForm.get('nombre')?.value);
    formData.append("ape_pat", this.editarEmpleadoForm.get('ape_pat')?.value);
    formData.append("ape_mat", this.editarEmpleadoForm.get('ape_mat')?.value);
    formData.append("celular", this.editarEmpleadoForm.get('celular')?.value);
    formData.append("direccion", this.editarEmpleadoForm.get('direccion')?.value);
    formData.append("correo", this.editarEmpleadoForm.get('correo')?.value);
    formData.append("fech_nac", this.editarEmpleadoForm.get('fech_nac')?.value);
    formData.append("rol_id", this.editarEmpleadoForm.get('rol_id')?.value);
    formData.append("usuario_registro_id", this.editarEmpleadoForm.get('usuario_registro_id')?.value);
    formData.append("file", this.editarEmpleadoForm.get('file')?.value);

    
    //const formValue = this.editarPaqueteForm.value;
    this.empleadosService.updateEmpleado(this.id, formData).subscribe( data => {
      if (data){
        this.toastr.success("Empleado actualizado exitosamente");
        this.router.navigate(['/empleados'])
      }
    })

  }

  changeRol(value: any) {
    this.roles.forEach( element => {
      if (element.nombre == value)
        this.editarEmpleadoForm.controls['marco_id'].setValue(element.id)
    })
  }

  onFileSelected(event: any){
    const file = (event.target as HTMLInputElement).files![0];
    this.editarEmpleadoForm.patchValue({
      file: file
    });
    this.editarEmpleadoForm.get('file')?.updateValueAndValidity()
    //this.url = URL.createObjectURL(event.target.files[0]);

    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
			this.url = reader.result; 
		}
  }

  getErrorMessage(field: string): string{
    let message: string = "";
    if(this.editarEmpleadoForm.get(field)?.errors?.required){
      message = 'El campo no puede estar vacio';
    }else if (this.editarEmpleadoForm.get(field)?.hasError('maxlength')){
      message = 'El campo sobrepasa el tamaño permitido'
    }else if (this.editarEmpleadoForm.get(field)?.hasError('minlength')){
      message = 'El campo no alcanza el minimo permitido'
    }else if (this.editarEmpleadoForm.get(field)?.errors?.email){
      message = 'No es un email valido'
    }
    return message;
  }

  isValidField(field: string){
    let campo = this.editarEmpleadoForm.get(field)
    return (campo?.touched || campo?.dirty && !campo?.valid);
  }

}