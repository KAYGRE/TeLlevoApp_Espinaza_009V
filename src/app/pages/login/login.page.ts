import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario={
    email:'',    
    password:''
  }

  constructor(private menuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async Login(){
    const alert = await this.alertController.create({
      header: 'Bienvenido!',
      message: 'Haz iniciado sesion!',
      buttons: ['OK'],
    });
    await alert.present();
    this.usuario.email="";
    this.usuario.password="";
  }

}
