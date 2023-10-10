import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  User = {
    email: '',
    password: ''
  }
  constructor(private router: Router, private auth: AuthService) { }
  login() {
    this.auth.login(this.User.email, this.User.password).subscribe((res: any) => {
      console.log('Login successful', res);
      Swal.fire({
        icon: 'success',
        title: 'Login',
        text: 'Logged in successfully',
      })
      this.router.navigate([res.api]);
    },
      (error) => {
        console.log('Login failed', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid username/password',
        })
      })
  }
}
