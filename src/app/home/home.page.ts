import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController,
    private toastController: ToastController) {
      this.doIntermittentToast();
     }

  async doIntermittentToast() {
    while (true) {
      await this.sleep(60000);
      this.presentToast();
    }
  }

  async presentToast() {
    console.log("toast");
    const toast = await this.toastController.create({
      message: 'Like this site? Leave a review.',
      showCloseButton: true,
      duration: 4000
    });
    toast.present();
  }

  async presentAlert() {
    document.getElementById('message-box').value = "";
    document.getElementById('message-box').placeholder = "Enter your message here...";
    document.getElementById('personal').checked = false;
    document.getElementById('professional').checked = false;
    const alert = await this.alertController.create({
      header: 'Thanks!',
      message: 'Your message was sent.',
      buttons: ['OK']
    });
    await alert.present();
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}