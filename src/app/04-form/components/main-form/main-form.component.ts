import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-main-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css'
})
export class MainFormComponent implements OnInit {

  @Input()
  public cvRobertoChild:any = {};

  public contactForm:any;

  public contactsForm:FormBuilder[] = [];

  constructor(private fb:FormBuilder) {
    this.contactForm = fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25),
                       Validators.pattern(/^[a-zA-ZñÑÀ-ÿ]([a-zA-ZñÑÀ-ÿ 'ª`]*)[a-zA-ZñÑÁ-ÿ]$/)]
                 ],
      lastname: ['díaz', [Validators.required, Validators.minLength(3), Validators.maxLength(50),
                      Validators.pattern(/^[a-zA-ZñÑÀ-ÿ]([a-zA-ZñÑÀ-ÿ 'ª`.]*)[a-zA-ZñÑÁ-ÿ]$/)]
                ],
      company: ['', [Validators.minLength(4), Validators.maxLength(60),
                     Validators.pattern(/^[a-zA-ZñÑÀ-ÿ0-9]([a-zA-ZñÑÀ-ÿ0-9 'ª`.,&$-]*)[a-zA-ZñÑÁ-ÿ0-9.]$/)]
               ],
      email: ['d@g', [Validators.required, Validators.email]],
      message: ['hola caracola', [Validators.required, /*Validators.minLength(50),*/ Validators.max(300)]],
      terms: [true, Validators.requiredTrue]
    });
  }

  ngOnInit() {};

  public submit() {
    if(this.contactForm.valid) {
      console.log("Formulario correcto y enviado");
      //this.contactForm.reset();

      this.contactsForm.push(this.contactForm.value);
      console.log(this.contactsForm);


    }
    else {
      console.log("Error en campos del formulario");

    }
    console.log(this.contactForm.controls.firstname.errors);
    let prueba = "hola caracola";
    console.log("longitud " + prueba, ": ", prueba.length);
    console.log(this.contactForm.value.firstname.length);
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
