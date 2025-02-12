import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiRestService } from '../../servicios/api-rest.service';
import { Router } from '@angular/router';
import { ValidaSelectDirectiveValidator } from '../../validaciones/valida-select.directive';
import { CategoriasResponse } from '../../interfaces/categorias_response';
import Swal from 'sweetalert2';
import { ProductosRequest } from '../../interfaces/productos_request';

@Component({
  selector: 'app-api-rest-productos-add',
  templateUrl: './api-rest-productos-add.component.html',
  styleUrl: './api-rest-productos-add.component.css'
})
export class ApiRestProductosAddComponent implements OnInit {
  
  categorias: Array<CategoriasResponse>;
  formulario!: FormGroup;  
  form = {
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categorias_id: 1
  };

  constructor(private servicio: ApiRestService, private router: Router) {}
  
  ngOnInit(): void {
    this.formulario = new FormGroup({
      categorias_id: new FormControl(),
      nombre: new FormControl
        (
          this.form.nombre,
          [
            Validators.required,
            Validators.minLength(4)
          ]
        ),
      descripcion: new FormControl
        (
          this.form.descripcion,
          [
            Validators.required,
            Validators.minLength(4)
          ]
        ),
      precio: new FormControl
        (
          this.form.precio,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern("^[0-9]*$"),
          ]
        ),
      stock: new FormControl
        (
          this.form.stock,
          [
            Validators.required,
            Validators.pattern("^[0-9]*$"),
          ]
        )


    }, { validators: ValidaSelectDirectiveValidator });
    this.getCategorias();
  }

  get nombre() { return this.formulario.get('nombre')!; }
  get descripcion() { return this.formulario.get('descripcion')!; }
  get precio() { return this.formulario.get('precio')!; }
  get stock() { return this.formulario.get('stock')!; }

  getCategorias() {
    this.servicio.getCategorias().subscribe({
      next: data => {
        this.categorias = data
      },
      error: error => {
        console.error('Error', error);
      }
    });
  }

  validaNumeros(e: any): boolean {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false
    }
    return true
  }

  enviar() {
    let modelo: ProductosRequest = {
      nombre: this.formulario.value.nombre, 
      descripcion: this.formulario.value.descripcion, 
      precio: this.formulario.value.precio, 
      stock: this.formulario.value.stock, 
      categorias_id: this.formulario.value.categorias_id
    };
    this.servicio.addProductos(modelo).subscribe({
      next: data => 
      {
        Swal.fire({
          icon: 'success',
          timer: 4000,
          title: 'OK',
          text: "Se creó el registro correctamente"
        });
        this.router.navigate(['/api/productos/add']).then(() => {
          window.location.reload();
        });
      }, 
      error: error => 
      {
        Swal.fire({
          icon: 'error',
          timer: 4000,
          title: 'Ops...',
          text: "Se produjo un error, por favor vuelva a intentalo"
        });
      }
    });
  }

}
