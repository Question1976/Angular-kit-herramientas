import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../../servicios/api-rest.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriasRequest } from '../../interfaces/categorias_request';

@Component({
  selector: 'app-api-rest-categorias-edit',
  templateUrl: './api-rest-categorias-edit.component.html',
  styleUrl: './api-rest-categorias-edit.component.css'
})
export class ApiRestCategoriasEditComponent implements OnInit {
  
  datos:any = {};
  id:string;
  formulario!: FormGroup;

  form = {
    nombre: ''
  };
  
  constructor(private servicio: ApiRestService, private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    let params:any = this.route.snapshot.params;
    this.id = params.id;

    this.hacerPeticion(this.id);

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

  hacerPeticion(id:any) {
    this.servicio.getCategoriasPorId(id).subscribe({
      next: data => 
      {
        this.datos = data
        this.formulario.get('nombre')?.setValue(this.datos.nombre);
      },
      error: error => 
      {
        this.router.navigate(['/error']).then(() => {
          window.location.reload();
        });
        //console.log('Error: ' + error);
      }
    });
  }

  enviar() {
    let modelo : CategoriasRequest = {
      nombre: this.formulario.value.nombre
    };
    this.servicio.editCategorias(modelo, this.id).subscribe({
      next: data => 
      {
        Swal.fire({
          icon: 'success',
          timer: 4000,
          title: 'OK',
          text: 'Se modificó el registro correctamente'
        });
      }, error:error => 
      {
        Swal.fire({
          icon: 'error',
          title: 'Ops...',
          text: 'Se produjo un error, por favor vuelve a intentarlo'
        });
      }
    });
  }

}
