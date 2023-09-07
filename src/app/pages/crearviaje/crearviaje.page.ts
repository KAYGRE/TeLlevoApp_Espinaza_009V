import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crearviaje',
  templateUrl: './crearviaje.page.html',
  styleUrls: ['./crearviaje.page.scss'],
})
export class CrearviajePage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async Crear() {
    const alert = await this.alertController.create({
      header: 'Ingrese sus datos..',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Patente',
        },
        {
          placeholder: 'Modelo (max 30 carácteres)',
          attributes: {
            maxlength: 30,
          },
        },
        {
          type: 'number',
          placeholder: 'Asientos disponibles',
          min: 1,
          max: 20,
        },
        {
          type: 'textarea',
          placeholder: 'Destino',
        },
      ],
    });

    await alert.present();
  }

}
