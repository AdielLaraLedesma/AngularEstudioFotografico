import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { UserResponse } from 'src/app/shared/models/user.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public url = environment.url;

  public botonEditarDisabled = true;

  public user: UserResponse = null!;
  private destroy$ = new Subject<any>();
  private subscription: Subscription = new Subscription();

  public urlImage: any;
  public imageSrc = 'assets/img/image-not-found.png';

  editarInformacionForm = new FormGroup({
    id: new FormControl(0, Validators.required),
    nombre: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    ape_pat: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    ape_mat: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    celular: new FormControl(0, [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
    ]),
    direccion: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    correo: new FormControl('', [
      Validators.required,
      Validators.maxLength(60),
      Validators.email,
    ]),
    //fech_nac: new FormControl('', Validators.required),
    rol_id: new FormControl(0, [Validators.required]),
    usuario_modificacion_id: new FormControl(0, [Validators.required]),

    file: new FormControl(),
  });

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _empleadosService: EmpleadosService,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.changeDisable();

    this.user = this._authService.getUser();

    if (this.user == null || this.user == undefined) {
      this._router.navigate(['/auth/login']);
      return;
    }

    this.getUser();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.destroy$.next({});
    this.destroy$.complete();
  }

  changeEnable() {
    this.botonEditarDisabled = false;
    this.editarInformacionForm.controls['nombre'].enable();
    this.editarInformacionForm.controls['ape_pat'].enable();
    this.editarInformacionForm.controls['ape_mat'].enable();
    this.editarInformacionForm.controls['celular'].enable();
    this.editarInformacionForm.controls['direccion'].enable();
    this.editarInformacionForm.controls['correo'].enable();
  }
  changeDisable() {
    this.botonEditarDisabled = true;
    this.editarInformacionForm.controls['nombre'].disable();
    this.editarInformacionForm.controls['ape_pat'].disable();
    this.editarInformacionForm.controls['ape_mat'].disable();
    this.editarInformacionForm.controls['celular'].disable();
    this.editarInformacionForm.controls['direccion'].disable();
    this.editarInformacionForm.controls['correo'].disable();
  }

  getUser() {
    this.subscription.add(
      this._empleadosService
        .getEmpleado(this.user.id as unknown as string)
        .subscribe((data) => {
          this.urlImage = this.url + data.url_imagen;
          this.editarInformacionForm.controls['nombre'].setValue(data.nombre);
          this.editarInformacionForm.controls['id'].setValue(data.id);
          this.editarInformacionForm.controls['ape_pat'].setValue(data.ape_pat);
          this.editarInformacionForm.controls['ape_mat'].setValue(data.ape_mat);
          this.editarInformacionForm.controls['celular'].setValue(data.celular);
          this.editarInformacionForm.controls['direccion'].setValue(
            data.direccion
          );
          this.editarInformacionForm.controls['correo'].setValue(data.correo);
          //this.editarEmpleadoForm.controls['fech_nac'].setValue(new Date(data.fech_nac))
          this.editarInformacionForm.controls['rol_id'].setValue(data.rol_id);
          this.editarInformacionForm.controls[
            'usuario_modificacion_id'
          ].setValue(this.user.id);
        })
    );
  }

  editarInformacion() {
    var formData: any = new FormData();
    formData.append('nombre', this.editarInformacionForm.get('nombre')?.value);
    formData.append(
      'ape_pat',
      this.editarInformacionForm.get('ape_pat')?.value
    );
    formData.append(
      'ape_mat',
      this.editarInformacionForm.get('ape_mat')?.value
    );
    formData.append(
      'celular',
      this.editarInformacionForm.get('celular')?.value
    );
    formData.append(
      'direccion',
      this.editarInformacionForm.get('direccion')?.value
    );
    formData.append('correo', this.editarInformacionForm.get('correo')?.value);
    formData.append('rol_id', this.editarInformacionForm.get('rol_id')?.value);
    formData.append(
      'usuario_modificacion_id',
      this.editarInformacionForm.get('usuario_modificacion_id')?.value
    );
    formData.append('file', this.editarInformacionForm.get('file')?.value);

    this.subscription.add(
      this._empleadosService
        .updateEmpleado(this.user.id as unknown as string, formData)
        .subscribe((data) => {
          if (data) {
            this._toastr.success(
              'Tu perfil ha sido actualizado exitosamente',
              'Perfil actualizado',
              {
                positionClass: 'toast-bottom-right',
              }
            );
          }
        })
    );

    this.changeDisable();

    this._authService.logoutJWT()
    this._router.navigate(['/auth/login'])

  }

  onImageSelected(event: any) {
    const file = (event.target as HTMLInputElement).files![0];
    this.editarInformacionForm.patchValue({
      file: file,
    });
    this.editarInformacionForm.get('file')?.updateValueAndValidity();

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.urlImage = reader.result;
    };
  }

  getErrorMessage(field: string): string {
    let message: string = '';
    if (this.editarInformacionForm.get(field)?.errors?.required) {
      message = 'El campo no puede estar vacio';
    } else if (this.editarInformacionForm.get(field)?.hasError('maxlength')) {
      message = 'El campo sobrepasa el tamaño permitido';
    } else if (this.editarInformacionForm.get(field)?.hasError('minlength')) {
      message = 'El campo no alcanza el minimo permitido';
    } else if (this.editarInformacionForm.get(field)?.errors?.email) {
      message = 'No es un email valido';
    }
    return message;
  }

  isValidField(field: string) {
    let campo = this.editarInformacionForm.get(field);
    return campo?.touched || (campo?.dirty && !campo?.valid);
  }
}
