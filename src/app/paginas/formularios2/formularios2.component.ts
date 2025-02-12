import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidaSelectDirectiveValidator } from '../../validaciones/valida-select.directive';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';

@Component({
  selector: 'app-formularios2',
  templateUrl: './formularios2.component.html',
  styleUrl: './formularios2.component.css'
})
export class Formularios2Component implements OnInit{
  
  formulario : FormGroup;
  usuario = 
  {
    nombre: "",
    correo: "",
    telefono: "",
    direccion: "",
    pais: ""
  };
  paises : Array<any>;

  constructor() {}
  
  ngOnInit(): void {
    /**
     * Declarar formulario reactivo.
     */
    this.formulario = new FormGroup(
      {
        nombre: new FormControl(
          this.usuario.nombre,
          [
            Validators.required,
            Validators.minLength(4)
          ]
        ),
        correo: new FormControl(
          this.usuario.correo,
          [
            Validators.required,
            Validators.minLength(4),
            Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
          ]
        ),
        telefono: new FormControl(
          this.usuario.telefono,
          [
            Validators.required,
            Validators.minLength(4)
          ]
        ),
        direccion: new FormControl(
          this.usuario.direccion,
          [
            Validators.required,
            Validators.minLength(4)
          ]
        ),
        pais: new FormControl(
          
        )
      }, {validators: ValidaSelectDirectiveValidator});
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

  /**
   * Getters
   * Para los campos del formulario,
   * y que puedan estar disponibles
   * dentro del formulario.
   */
  get nombre() {
    return this.formulario.get('nombre')!;
  }
  get correo() {
    return this.formulario.get('correo')!;
  }
  get telefono() {
    return this.formulario.get('telefono')!;
  }
  get direccion() {
    return this.formulario.get('direccion')!;
  }
  get pais() {
    return this.formulario.get('pais')!;
  }

  enviar() {    
    let datos = this.formulario.value.nombre + " | " + this.formulario.value.correo + " | " + this.formulario.value.direccion + " | " + this.formulario.value.pais;
    Swal.fire(
      {
        icon: 'success',
        timer: 5000,
        title: 'OK',
        text: datos
      }
    )
  }

}
