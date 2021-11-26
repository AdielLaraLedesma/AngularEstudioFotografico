import { HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recoverpassword',
  templateUrl: './recoverpassword.component.html',
  styleUrls: ['./recoverpassword.component.css']
})
export class RecoverpasswordComponent implements OnInit, OnDestroy {

  resetToken = ""
  
  //headers = new HttpHeaders();

  private subscription: Subscription = new Subscription();

  recoverPasswordForm = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')]),
    confirmarContrasena: new FormControl('', [Validators.required, Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')])
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

    console.log(this.resetToken)

    //this.headers.append('reset', this.resetToken);



    

  }

  recoverPassword(){

    
    if(this.recoverPasswordForm.invalid){
      return;
    }

    
    //TODO Aqui poner el metodo post para recuperar contraseña


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
      message = 'You must enter a value';
    }else if (this.recoverPasswordForm.get(field)?.errors?.email){
      message = 'Not a valid email'
    }
    return message;
  }

  isValidField(field: string){
    let campo = this.recoverPasswordForm.get(field)
    return (campo?.touched || campo?.dirty && !campo?.valid);
  }

}
