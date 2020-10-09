import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'userData': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)])
      })
    });
    this.loginForm.valueChanges.subscribe(
      (value) => console.log(value)
    );
    this.loginForm.statusChanges.subscribe(
      (status) => console.log(status)
    )
  }

  loginForm: FormGroup;

  onSubmit() {
    this.router.navigate(['home']);
    this.loginForm.reset({
      'userData': {
        'email': '',
        'password': '',
      }
    });
  }

  logData() {
    console.log('FORM SUBMITTED!', this.loginForm.value);
  }

  emailValue: string = '';

}
