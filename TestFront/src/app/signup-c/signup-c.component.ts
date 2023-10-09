import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup-c',
  templateUrl: './signup-c.component.html',
  styleUrls: ['./signup-c.component.css']
})

export class SignupCComponent implements OnInit {
  registerForm!: FormGroup;
  invaildRPWD: boolean = false;
  message = '';

  displayMsg: string = '';

  isAccountCreated: boolean = false;

  repeatPass: string = 'none';


  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern('[a-zA-Z].*'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      pwd: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
        ],
      ],
      rpwd: [''],
    });
  }

  register() {
    if (this.PWD.value == this.RPWD.value) {

      console.log(this.registerForm.valid);

      this.repeatPass = 'none'

      this.authService.registerUser([

        this.registerForm.value.name,

        this.registerForm.value.email,

        this.registerForm.value.mobile,

        this.registerForm.value.pwd

      ]).subscribe(res => {

        if (res == 'Success') {

          this.displayMsg = 'Account Created Successfully!';

          this.isAccountCreated = true;

          this.registerForm.reset();

        }

        else if (res == 'Already Exits') {

          this.displayMsg = 'Account already Exist';

          this.isAccountCreated = false;

        }

        else {

          this.displayMsg = 'Something went wrong.';

          this.isAccountCreated = false;

        }

      });

    }

    else {

      this.repeatPass = 'inline'

    }
  }

  //#region Getters
  get Name(): FormControl {
    return this.registerForm.get('name') as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get Mobile(): FormControl {
    return this.registerForm.get('mobile') as FormControl;
  }
  get PWD(): FormControl {
    return this.registerForm.get('pwd') as FormControl;
  }
  get RPWD(): FormControl {
    return this.registerForm.get('rpwd') as FormControl;
  }
  //#endregion
}
