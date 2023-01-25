import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import * as internal from 'stream';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {
  nickname: string = '';
  counter = 0;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Nickname erfassen',
      inputs: [
        {
          name: 'input1',
          type: 'text',
          placeholder: 'Spitzname'
        }
      ],

      buttons: [
        {
          text: 'OK',
          handler: (alertData) => {
            this.nickname = alertData.input1;
          }
        }
      ],

    });
    await alert.present();
  }

  countUp(){
    this.counter += 1;
  }

}
