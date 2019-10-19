import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('userForm', {static: false}) submitForm: NgForm;
  genders: string[];

  setDefaults() {
    this.submitForm.setValue({
      // username:'test',
      // name: {
      //       firstName: 'Dhavan',
      //       lastName: 'Shekarappa'
      //     },
      // email: 'dhavan.shekarappa@gmail.com',
      // secret: 'pet',
      // gender: 'Male'
      UserData: {
        username: 'dhavans1',
        name: {
          firstName: 'Dhavan',
          lastName: 'Shekarappa'
        },
        email: 'dhavan.shekarappa@gmail.com',
        secret: 'pet',
        gender: 'Male'
      }
    });
  }

  ngOnInit() {
    this.genders = ['Male', 'Female'];
  }

  suggestUsername() {
    const suggestedName = 'Superuser';
    this.submitForm.form.patchValue({
      UserData:{
        username: suggestedName
      }
    })
  }

  onSubmit() {
    console.log(this.submitForm);
  }
}
