import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.page.html',
  styleUrls: ['./newsletter.page.scss'],
})
export class NewsletterPage implements OnInit {

  contactForm: any;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email])
      }
    );
  }

  sendContactForm(){
    console.log("wurde versendet an folgende E-Mail" + this.contactForm.get('email')?.value);
  }

}
