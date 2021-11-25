import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Rol } from '../../../shared/models/rol.interface';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Employee } from 'src/app/shared/models/employee.interface';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { UserResponse } from 'src/app/shared/models/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editempleado',
  templateUrl: './editempleado.component.html',
  styleUrls: ['./editempleado.component.css']
})
export class EditempleadoComponent implements OnInit, OnDestroy {

  public newFile: File =  null!;
  public url: any;
  public imageSrc = 'assets/img/image-not-found.png'   
  public imageDefault = 'http://localhost:3000/'

  private destroy$ = new Subject<any>();
  public user: UserResponse = null!;
  private subscription: Subscription = new Subscription();


  roles: Rol[]=[{id: 1,nombre: 'Administrador'},{id: 3, nombre: 'Fotografo'},{id: 4, nombre: 'Recepcionista'}];
  selectedRol = '';



  isDisabled: boolean = true;
  id: string =  "";

 
  editarEmpleadoForm = new FormGroup({
    id: new FormControl(0,  Validators.required),
    nombre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    ape_pat: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    ape_mat: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    celular: new FormControl(0, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
    direccion: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    correo: new FormControl('', [Validators.required, Validators.maxLength(60), Validators.email]),
    //fech_nac: new FormControl('', Validators.required),
    rol_id: new FormControl(0, [Validators.required]),
    usuario_modificacion_id: new FormControl(0, [Validators.required]),


    file: new FormControl()
  })
  

  constructor(
    private empleadosService: EmpleadosService,
    private authService: AuthService,
    private rutaActiva: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
    ) { }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.destroy$.next({});
    this.destroy$.complete();
  
  }

  ngOnInit(): void {

    this.getUser();
 
    this.id = this.rutaActiva.snapshot.params.id;

    this.empleadosService.getEmpleado(this.id).subscribe(data => {

      
      if (!data){
        this.router.navigate(["/empleados"]);
        return
      }

      this.url = this.imageDefault + data.url_imagen;

      this.editarEmpleadoForm.controls['id'].setValue(data.id)
      this.editarEmpleadoForm.controls['nombre'].setValue(data.nombre)
      this.editarEmpleadoForm.controls['ape_pat'].setValue(data.ape_pat)
      this.editarEmpleadoForm.controls['ape_mat'].setValue(data.ape_mat)
      this.editarEmpleadoForm.controls['celular'].setValue(data.celular)
      this.editarEmpleadoForm.controls['direccion'].setValue(data.direccion)
      this.editarEmpleadoForm.controls['correo'].setValue(data.correo)
      //this.editarEmpleadoForm.controls['fech_nac'].setValue(new Date(data.fech_nac))
      this.editarEmpleadoForm.controls['rol_id'].setValue(data.rol_id)
      this.editarEmpleadoForm.controls['usuario_modificacion_id'].setValue(this.user.id)


      console.log(data);

      //console.log(this.editarEmpleadoForm.invalid)


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
    //formData.append("fech_nac", this.editarEmpleadoForm.get('fech_nac')?.value);
    formData.append("rol_id", this.editarEmpleadoForm.get('rol_id')?.value);
    formData.append("usuario_modificacion_id", this.editarEmpleadoForm.get('usuario_modificacion_id')?.value);
    formData.append("file", this.editarEmpleadoForm.get('file')?.value);


    console.log(this.editarEmpleadoForm.controls['file']?.value)
    
    this.empleadosService.updateEmpleado(this.id, formData).subscribe( data => {
      console.log(data);
      if (data){ 
        this.toastr.success("El empleado fue actualizado exitosamente", "Empleado actualizado", {
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['/empleados'])
      }
    })

  }

  getUser(){
    this.subscription.add(
      this.authService.user$
        .pipe(takeUntil(this.destroy$))
        .subscribe((user: UserResponse) => {
        if (user) {
          this.user = user;
        }
      })
    );
  }

  changeRol(value: any) {
    this.roles.forEach( element => {
      if (element.nombre == value)
        this.editarEmpleadoForm.controls['rol_id'].setValue(element.id)
    })
  }

  onFileSelected(event: any){
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