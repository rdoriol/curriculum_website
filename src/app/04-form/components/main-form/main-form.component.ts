import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from '../../../email.service';

@Component({
  selector: 'app-main-form',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, HttpClientModule ],
  providers: [ EmailService ],
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css'
})
export class MainFormComponent implements OnInit {

  private contactForm:any;
  private contactsForm:FormBuilder[] = [];
  private submited:boolean = false;
  private messageSend:string = "";

  constructor(private fb:FormBuilder) {
    this.contactForm = fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25),
                       Validators.pattern(/^[a-zA-ZñÑÀ-ÿ]([a-zA-ZñÑÀ-ÿ'ª` ]*)/)]
                 ],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50),
                      Validators.pattern(/^[a-zA-ZñÑÀ-ÿ]([a-zA-ZñÑÀ-ÿ 'ª`.]*)/)]
                ],
      company: ['', [Validators.minLength(5), Validators.maxLength(60),
                     Validators.pattern(/^[a-zA-ZñÑÀ-ÿ0-9]([a-zA-ZñÑÀ-ÿ0-9 'ª`.,&$-]*)/)]
               ],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, /*Validators.minLength(50),*/ Validators.max(256)]],
      terms: [false, Validators.requiredTrue]
    });
  }

  @Input()
  public cvRobertoChild:any = {};

  ngOnInit() {};

  public submit() {
    this.submited = true;

    if(this.contactForm.valid) {
      console.log("Formulario correcto y enviado");
      this.submited = false;
      this.contactsForm.push(this.contactForm.value);
      this.contactForm.reset();
      this.messageSend = "success";

    }
    else {
      console.log("Errores en campos del formulario");
      this.messageSend = "error";
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
