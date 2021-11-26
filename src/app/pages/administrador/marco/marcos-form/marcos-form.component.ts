import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { MarcosService } from 'src/app/services/marcos.service';
import { Marco } from 'src/app/shared/models/marco.interface';
import { UserResponse } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'app-marcos-form',
  templateUrl: './marcos-form.component.html',
  styleUrls: ['./marcos-form.component.css']
})
export class MarcosFormComponent implements OnInit {

  private destroy$ = new Subject<any>();
  public user: UserResponse = null!;

  agregarMarcoForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    precio: new FormControl('', [Validators.required]), 
    usuario_registro_id: new FormControl(0, Validators.required)
  })

  constructor(
    private marcoService: MarcosService,
    private toastr: ToastrService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user$
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: UserResponse) => {
        if (user) {
          this.user = user;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();

  }

  agregarMarco(){

    this.agregarMarcoForm.controls['usuario_registro_id'].setValue(this.user.id);

    const formValue = this.agregarMarcoForm.value;

    console.log(formValue)

    this.marcoService.saveMarco(formValue).subscribe( data => {
      if (data){
        this.toastr.success("Marco agregado exitosamente");
        this.router.navigate(['/marcos'])
      }
    })
  }


  getErrorMessage(field: string): string{
    let message: string = "";
    if(this.agregarMarcoForm.get(field)?.errors?.required){
      message = 'El campo no puede estar vacio';
    }else if (this.agregarMarcoForm.get(field)?.hasError('maxlength')){
      message = 'El campo sobrepasa el tamaño permitido'
    }
    return message;
  }

  isValidField(field: string){
    let campo = this.agregarMarcoForm.get(field)
    return (campo?.touched || campo?.dirty && !campo?.valid);
  }

}
