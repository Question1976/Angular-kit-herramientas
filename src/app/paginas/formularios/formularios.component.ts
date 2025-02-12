import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css'
})
export class FormulariosComponent implements OnInit {

  usuario : any;
  paises : Array<any>;
  users: Array<any> = [];
  checkboxMarca : boolean = false;

  constructor() {
    this.usuario = 
    {
      nombre: "",
      correo: "",
      telefono: "",
      direccion: "",
      pais: ""
    };
    this.paises = [
      {
        nombre: "España",
        dominio: "es"
      },
      {
        nombre: "Inglaterra",
        dominio: "uk"
      },
      {
        nombre: "Alemania",
        dominio: "de"
      },
      {
        nombre: "Italia",
        dominio: "it"
      },
      {
        nombre: "Francia",
        dominio: "fr"
      }
    ];
  }

  ngOnInit(): void {    
  }

  seleccionaCheck(evento : any) {
    if (evento.target.checked) {
      this.checkboxMarca = true;
      alert("Terminos y condiciones marcados!");
    } else {
      alert("Terminos y condiciones NO marcados!");
      this.checkboxMarca = false;
    }
  }

  enviar() {
    //alert(this.usuario.nombre + " | " + this.usuario.correo + " | " + this.usuario.telefono + " | " + this.usuario.direccion + " | " + this.usuario.pais);
    this.users.push(
      {
        nombre: this.usuario.nombre,
        correo: this.usuario.correo,
        telefono: this.usuario.telefono,
        direccion: this.usuario.direccion,
        pais: this.usuario.pais
      }
    );
  }

}
