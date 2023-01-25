import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.page.html',
  styleUrls: ['./newsletter.page.scss'],
})
export class NewsletterPage implements OnInit {

  contactForm: any;
  message: any;

  constructor(private toastController: ToastController) { }

  ngOnInit() {
    this.contactForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email])
      }
    );
  }

  sendContactForm(){
    console.log(this.message = "Wurde versendet an folgende E-Mail " + this.contactForm.get('email')?.value);
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: "Wurde versendet an folgende E-Mail " + this.contactForm.get('email')?.value,
      duration: 1500,
      position: position
    });

    await toast.present();
  }
}
