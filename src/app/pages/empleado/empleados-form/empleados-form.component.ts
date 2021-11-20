import { Component, HostBinding, OnInit } from '@angular/core';
import { Employee } from '../../../shared/models/employee.interface';
import { Rol } from '../../../shared/models/rol.interface'
import { EmpleadosService } from '../../../services/empleados.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empleados-form',
  templateUrl: './empleados-form.component.html',
  styleUrls: ['./empleados-form.component.css']
})
export class EmpleadosFormComponent implements OnInit {

  @HostBinding('class') classes = "row";

  //para testear xd
  roles: Rol[]=[{id: 1,nombre: 'administrador'},{id: 3, nombre: 'fotografo'},{id: 4, nombre: 'recepcionista'}];
  selectedRol = 0;


  agregarEmpleadoForm = new FormGroup({
    id: new FormControl({value:'', disabled:true}, Validators.required),
    nombre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    ape_pat: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    ape_mat: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    celular: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    direccion: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    correo: new FormControl('', [Validators.required, Validators.maxLength(60), Validators.email]),
    fech_nac: new FormControl('', Validators.required),
    rol_id: new FormControl('', [Validators.required, Validators.maxLength(20)])
  })
 

  constructor(private empleadoService: EmpleadosService) { }

  ngOnInit(): void {
  }

  agregarEmpleado(){
    console.log("Hola")




  }

  changeRol(value: any) {
    this.agregarEmpleadoForm.controls['rol_id'].setValue(value)
  }


  getErrorMessage(field: string): string{
    let message: string = "";
    if(this.agregarEmpleadoForm.get(field)?.errors?.required){
      message = 'El campo no puede estar vacio';
    }else if (this.agregarEmpleadoForm.get(field)?.hasError('maxlength')){
      message = 'El campo sobrepasa el tamaño permitido'
    }else if (this.agregarEmpleadoForm.get(field)?.hasError('minlength')){
      message = 'El campo no alcanza el minimo permitido'
    }else if (this.agregarEmpleadoForm.get(field)?.errors?.email){
      message = 'No es un email valido'
    }
    return message;
  }

  isValidField(field: string){
    let campo = this.agregarEmpleadoForm.get(field)
    return (campo?.touched || campo?.dirty && !campo?.valid);
  }


}