import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../../servicios/api-rest.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriasRequest } from '../../interfaces/categorias_request';

@Component({
  selector: 'app-api-rest-categorias-add',
  templateUrl: './api-rest-categorias-add.component.html',
  styleUrl: './api-rest-categorias-add.component.css'
})
export class ApiRestCategoriasAddComponent implements OnInit {

  formulario!: FormGroup;

  form = {
    nombre: ''
  };
  
  constructor(private servicio: ApiRestService, private router: Router) {}
  
  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl
      (
        this.form.nombre,
        [
          Validators.required,
          Validators.minLength(4)
        ]
      )
    });
  }

  get nombre() {
    return this.formulario.get('nombre')!;
  }

  enviar() {
    let modelo : CategoriasRequest = {
      nombre: this.formulario.value.nombre
    };
    this.servicio.addCategorias(modelo).subscribe({
      next:data => 
      {
        Swal.fire({
          icon: 'success',
          timer: 4000,
          title: 'OK',
          text: 'Se creó el registro correctamente'
        });
      }, error:error => 
      {
        Swal.fire({
          icon: 'error',
          title: 'Ops...',
          text: 'Se produjo un error, por favor vuelve a intentarlo'
        });
        this.router.navigate(['/api/categorias/add']).then(()=>{
          window.location.reload();
        });
      }
    });
  }

}
