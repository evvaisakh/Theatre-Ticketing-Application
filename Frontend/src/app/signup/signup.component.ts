import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private auth: AuthService, private router: Router) { }
  User = {
    name: '',
    email: '',
    phonenumber: '',
    password: '',
    confirmPassword: ''
  }
  isconfirmPasswordInvalid(): boolean {
    return this.User.password !== this.User.confirmPassword;
  }
  SignUp() {
    console.log(`Function called ${this.User}`)
    this.auth.SignUp(this.User).subscribe((res: any) => {
      console.log('SignUp success', res);
      Swal.fire({
        icon: 'success',
        title: 'Sign Up',
        text: 'Signed Up Successfully',
      })
      this.router.navigate(['/login']);
    }, (error) => {
      console.log('SignUp failed', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    })
  }
}
