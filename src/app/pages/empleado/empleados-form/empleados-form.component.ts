import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../../../shared/models/employee.interface';
import { Rol } from '../../../shared/models/rol.interface'
import { EmpleadosService } from '../../../services/empleados.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { UserResponse } from 'src/app/shared/models/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-empleados-form',
  templateUrl: './empleados-form.component.html',
  styleUrls: ['./empleados-form.component.css']
})
export class EmpleadosFormComponent implements OnInit, OnDestroy {


  public url: any;
  public imageSrc = 'assets/img/image-not-found.png'  

  private destroy$ = new Subject<any>();
  public user: UserResponse = null!;

  public selectedFile: File =  null!;

  roles: Rol[]=[{id: 1,nombre: 'Administrador'},{id: 3, nombre: 'Fotografo'},{id: 4, nombre: 'Recepcionista'}];
  selectedRol = 0;

  private subscription: Subscription = new Subscription();

  agregarEmpleadoForm = new FormGroup({
    id: new FormControl({value:'', disabled:true}, Validators.required),
    nombre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    ape_pat: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    ape_mat: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    contrasena: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    celular: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    direccion: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    correo: new FormControl('', [Validators.required, Validators.maxLength(60), Validators.email]),
    fech_nac: new FormControl('', Validators.required),
    rol_id: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    file: new FormControl()
  })
  

  constructor(
    private empleadoService: EmpleadosService, 
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.authService.user$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: UserResponse) => {
        if (user) {
          this.user = user;
        }
      });
  }

  agregarEmpleado(){

    var formData: any = new FormData();
    formData.append("nombre", this.agregarEmpleadoForm.get('nombre')?.value);
    formData.append("ape_pat", this.agregarEmpleadoForm.get('ape_pat')?.value);
    formData.append("ape_mat", this.agregarEmpleadoForm.get('ape_mat')?.value);
    formData.append("contrasena", this.agregarEmpleadoForm.get('contrasena')?.value);
    formData.append("celular", this.agregarEmpleadoForm.get('celular')?.value);
    formData.append("direccion", this.agregarEmpleadoForm.get('direccion')?.value);
    formData.append("correo", this.agregarEmpleadoForm.get('correo')?.value);
    formData.append("fech_nac", this.agregarEmpleadoForm.get('fech_nac')?.value);
    formData.append("rol_id", this.agregarEmpleadoForm.get('rol_id')?.value);
    formData.append("usuario_registro_id", this.user.id);
    formData.append("file", this.agregarEmpleadoForm.get('file')?.value);

      

    this.subscription.add(
      this.empleadoService.saveEmpleado(formData).subscribe( data => {
        this.toastr.success("El empleado fue agregado exitosamente", "Empleado agregado", {
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['/empleados'])
      })
    );

  }

  changeRol(value: any) {
    this.roles.forEach( element => {
      if (element.nombre == value)
        this.agregarEmpleadoForm.controls['rol_id'].setValue(element.id)
    })
  }

  onFileSelected(event: any){
    const file = (event.target as HTMLInputElement).files![0];
    this.agregarEmpleadoForm.patchValue({
      file: file
    });
    this.agregarEmpleadoForm.get('file')?.updateValueAndValidity()

    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
			this.url = reader.result; 
		}
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