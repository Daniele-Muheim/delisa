import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var emailjs: any;

@Component({
  selector: 'app',
  templateUrl: 'contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  registerForm: FormGroup;
  submitted = false;
  successMessage = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get getContactFormControls() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true; if (this.registerForm.invalid) {
      return;
    }
    else {
      emailjs.send("gmail", "delisa",
        {
          "from_name": `${this.registerForm.value.email}`,
          "email": `${this.registerForm.value.email}`,
          "telephone": `${this.registerForm.value.phone}`,
          "message_html": this.registerForm.value.message
        });
      this.registerForm.reset();
      this.successMessage = true
    }
  }
}