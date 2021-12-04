import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  public hidePassword = true;
  public hideConfirm = true;
  resetToken = ""
  
  //headers = new HttpHeaders();

  private subscription: Subscription = new Subscription();

  recoverPasswordForm = new FormGroup({ 
    newPassword: new FormControl('', [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')])
  })


  constructor(
    private rutaActiva: ActivatedRoute,
    private authService: AuthService, 
    private toastr: ToastrService,
    private router: Router,
  ) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {

    this.resetToken = this.rutaActiva.snapshot.params.id;
    

  }

  recoverPassword(){
    if(this.recoverPasswordForm.invalid){
      return;
    }

    const headers = new HttpHeaders().set('reset', this.resetToken);

    this.subscription.add(


      this.authService.newPassword(this.recoverPasswordForm.value, headers).subscribe( (data) => {
        this.toastr.success(`Se ha cambiado la contraseña exitosamente`, "Contraseña cambiada", {
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['/login'])
      })

    );

  }



  getErrorMessage(field: string): string{
    let message: string = "";
    if(this.recoverPasswordForm.get(field)?.errors?.required){
      message = 'El campo no puede estar vacio';
    }else if (this.recoverPasswordForm.get(field)?.errors?.email){
      message = 'Correo electronico no valido'
    }
    return message;
  }

  isValidField(field: string){
    let campo = this.recoverPasswordForm.get(field)
    return (campo?.touched || campo?.dirty && !campo?.valid);
  }

}