import { Component, Input, OnInit } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { contactForm } from '../../../05-interfaces/contact-form.interface';

import { ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-main-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css'
})
export class MainFormComponent implements OnInit {

  public contactForm:any;

  public contactsForm:any[] = [];

  constructor(private fb:FormBuilder) {
    this.contactForm = fb.group({
      firstname: [''],
      lastname: [''],
      company: [''],
      email: [''],
      message: [''],
      terms: [false]
    });
  }

  @Input()
  public cvRobertoChild:any = {};


  ngOnInit() {

  }

  public submit() {
    if(this.contactForm.valid) {
      console.log("Formulario correcto y enviado");
      console.log(this.contactForm.value);
      this.contactsForm.push(this.contactForm.value);
      console.log(this.contactsForm);
    }
    else {
      console.log("Error en campos del formulario");
    }
  }










































  /*
  public userForm:contactForm =
  {
    name: "",
    surname: "",
    company: "",
    email: "",
    message: ""
  };

  public usersForm:any[] = [];

  public pepe() {
    if(this.userForm.name == "") {
      console.log("Campo nombre vacío");
    }
    else {
      this.usersForm.push(this.userForm);
      this.userForm = {
        name: "",
        surname: "",
        company: "",
        email: "",
        message: ""
      }
    }
    console.log(this.userForm);
  }
  */



}   // End class
