import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistroRequest } from '../../interfaces/registro_request';

@Component({
  selector: 'app-acceso-registro',
  templateUrl: './acceso-registro.component.html',
  styleUrl: './acceso-registro.component.css'
})
export class AccesoRegistroComponent implements OnInit {

  formulario!: FormGroup;

  form = {
    nombre: '',
    correo: '',
    password: ''
  };
  
  constructor(
    private service: AuthService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.formulario = new FormGroup(
      {
        nombre: new FormControl(
          this.form.nombre, [
          Validators.required,
          Validators.minLength(4),
        ]),
        correo: new FormControl(
          this.form.correo, [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]),
        password: new FormControl(
          this.form.password, [
          Validators.required,
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,20}$')
          //Validators.pattern("(?=.*[A-Za-z])"),//Afirmar que una cadena tiene al menos un alfabeto
          //Validators.pattern("(?=.*\d)"),//Afirmar que una cadena tiene al menos un número
          //Validators.pattern("[A-Za-z\d]{6,20}"),//La longitud de los caracteres (solo números y letras) debe estar entre 6 y 20
        ]),
      });
  }

  get nombre() { return this.formulario.get('nombre')!; }
  get correo() { return this.formulario.get('correo')!; }
  get password() { return this.formulario.get('password')!; }

  enviar() {
    let modelo: RegistroRequest = { 
      nombre: this.formulario.value.nombre,
      correo: this.formulario.value.correo,
      password: this.password.value.password
    };
    this.service.registro(modelo).subscribe(
      {
        next: data => 
        {
          if (data.estado == 'ok') {
            Swal.fire({
              icon: 'success',
              timer: 4000,
              title: 'OK',
              text: 'Te has registrado correctamente'
            });
          } else {
            Swal.fire({
              icon: 'error',
              timer: 4000,
              title: 'Ops...',
              text: 'El e-mail ingresado ya está siendo usado por otro usuario'
            });
          }
          this.router.navigate(['/registro']).then(() => {
            window.location.reload();
          });
        },
        error: error => 
        {
          Swal.fire({
            icon: 'error',
            timer: 4000,
            title: 'Ops...',
            text: 'Se produjo un error, por favor vuelva a intentarlo'
          });
          this.router.navigate(['/registro']).then(() => {
            window.location.reload();
          })
        }
      });
  }

}
