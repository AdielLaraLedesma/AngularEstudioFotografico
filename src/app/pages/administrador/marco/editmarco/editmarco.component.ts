import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MarcosService } from 'src/app/services/marcos.service';
import { UserResponse } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-editmarco',
  templateUrl: './editmarco.component.html',
  styleUrls: ['./editmarco.component.css'],
})
export class EditmarcoComponent implements OnInit, OnDestroy {
  id: string = '';

  public user: UserResponse = null!;
  private subscription: Subscription = new Subscription();

  editarMarcoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(1)]),
    precio: new FormControl(0, [Validators.required, Validators.min(1)]),
    usuario_registro_id: new FormControl(0, [Validators.required]),
    usuario_modificacion_id: new FormControl(0, [Validators.required]),
  });

  constructor(
    private marcoService: MarcosService,
    private rutaActiva: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.getUsuario();

    this.id = this.rutaActiva.snapshot.params.id;

    this.subscription.add(
      this.marcoService.getMarco(this.id).subscribe((data) => {
        if (!data) {
          this.router.navigateByUrl('/marcos');
          return;
        }

        this.editarMarcoForm.controls['nombre'].setValue(data.nombre);
        this.editarMarcoForm.controls['precio'].setValue(data.precio);
        this.editarMarcoForm.controls['usuario_registro_id'].setValue(data.usuario_registro_id);
        this.editarMarcoForm.controls['usuario_modificacion_id'].setValue(this.user.id);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  getUsuario() {
    this.user = this.authService.getUser();
  }

  editarMarco() {
    const formValue = this.editarMarcoForm.value;

    this.marcoService.updateMarco(this.id, formValue).subscribe((data) => {
      if (data) {
        this.toastr.success(
          'El marco fue actualizado exitosamente',
          'Marco actualizado',
          {
            positionClass: 'toast-bottom-right',
          }
        );
        this.router.navigate(['/marcos']);
      }
    });
  }

  getErrorMessage(field: string): string {
    let message: string = '';
    if (this.editarMarcoForm.get(field)?.errors?.required) {
      message = 'El campo no puede estar vacio';
    } else if (this.editarMarcoForm.get(field)?.hasError('maxlength')) {
      message = 'El campo sobrepasa el tamaño permitido';
    } else if (this.editarMarcoForm.get(field)?.hasError('minlength')) {
      message = 'El campo no alcanza el minimo permitido';
    } else if (this.editarMarcoForm.get(field)?.hasError('min')) {
      message = 'No es un precio valido';
    }
    return message;
  }

  isValidField(field: string) {
    let campo = this.editarMarcoForm.get(field);
    return campo?.touched || (campo?.dirty && !campo?.valid);
  }
}
