import { Component } from '@angular/core';

interface Componente{
  name: string;
  redirecTo: string;
  icon:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  componentes: Componente[]=[
    {
      name:'Inicio',
      redirecTo:'/inicio',
      icon:'home-outline'
    },
    {
      name:'Registro',
      redirecTo:'/registro',
      icon:'log-in-outline'
    },
    {
      name:'Login',
      redirecTo:'/login',
      icon:'log-in-outline'
    },
    {
      name:'Informacion',
      redirecTo:'/informacion',
      icon:'information-circle-outline'
    },

  ]



  constructor() {}
}
