import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'userData': new FormGroup({
        'firstname': new FormControl(null, [Validators.required]),
        'lastname': new FormControl(null, [Validators.required]),
        'address': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)])
      })
    });
    this.registrationForm.valueChanges.subscribe(
      (value) => console.log(value)
    );
    this.registrationForm.statusChanges.subscribe(
      (status) => console.log(status)
    )
  }

  registrationForm: FormGroup;

  onSubmit() {
    this.registrationForm.reset({
      'userData': {
        'firstname': '',
        'lastname': '',
        'address': '',
        'email': '',
        'password': '',
      }
    });
  }

  logData() {
    console.log('FORM SUBMITTED!', this.registrationForm.value);
  }

  emailValue: string = '';

  processForm() {
    const allInfo = `Successful registration!`;
    alert(allInfo);
  }
}