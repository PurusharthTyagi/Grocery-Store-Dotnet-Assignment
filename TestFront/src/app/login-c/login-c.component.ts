import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-c',
  templateUrl: './login-c.component.html',
  styleUrls: ['./login-c.component.css']
})
export class LoginCComponent implements OnInit {

  isUserValid: boolean = false

  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  login() {
    this.authService.loginUser([this.loginForm.value.email, this.loginForm.value.pwd])

      .subscribe((res) => {

        if (res == 'Failure') {

          this.isUserValid = false;

          alert('Login Unsuccessful');
        }

        else {

          this.isUserValid = true;

          this.authService.setToken(res);
          localStorage.setItem('UserName',this.loginForm.value.email);
          alert("Login Successful");

          this.router.navigate(['dashboard']).then(()=>{
            window.location.reload();
          });

        }

      }

      );
  }

  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get PWD(): FormControl {
    return this.loginForm.get('pwd') as FormControl;
  }
}
