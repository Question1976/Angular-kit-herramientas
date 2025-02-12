import { Component, OnInit } from '@angular/core';
import { FotosResponse } from '../../interfaces/fotos_response';
import { ApiRestService } from '../../servicios/api-rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-api-rest-productos-fotos',
  templateUrl: './api-rest-productos-fotos.component.html',
  styleUrl: './api-rest-productos-fotos.component.css'
})
export class ApiRestProductosFotosComponent implements OnInit {
  
  id: string;
  datos: any = {};
  fotos: Array<FotosResponse>;

  form = {
    productos_id: '',
    file: '',
    fileSource: ''
  }
  formulario!: FormGroup;

  constructor(
    private servicio: ApiRestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    let params: any = this.route.snapshot.params;
    this.id = params.id;
    this.getProducto(this.id);
    this.getFotos(this.id);
    this.formulario = new FormGroup({
      productos_id: new FormControl(),
      file: new FormControl('', [Validators.required]),
      fileSource: new FormControl('', [Validators.required])
    });
  }

  get productos_id() { return this.formulario.get('productos_id')!; }
  get imagen() { return this.formulario.get('imagen')!; }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.formulario.patchValue(
        {
          fileSource: file
        }
      );
    }
  }

  getProducto(id: any) {
    this.servicio.getProductosPorId(id).subscribe(
    {
     next: data => 
      {
        this.datos = data
        this.formulario.get('productos_id')?.setValue(this.datos.id);
      },
      error: error => 
      {
        console.error('Error: ' + error);
      }  
    });
  }

  getFotos(id: any) {
    this.servicio.getProductosFotos(id).subscribe({
      next: data => {
        this.fotos = data
      },
      error: error => {
        console.error('Error', error);
      }
    });
  }

  enviar() {
    let file = this.formulario.value.file;
    const extension = file.split('.');
    let largo = extension.length-1;
    if (extension[largo] == 'png' || extension[largo] == 'jpg' || extension[largo] == 'jpeg') {
      this.servicio.addProductosFotos(this.formulario.value.productos_id, this.formulario.value.fileSource).subscribe({
        next: data => {
          Swal.fire({
            icon: 'success',
            timer: 4000,
            title: 'OK',
            text: "Se creó el registro correctamente"
          });

          this.router.navigate(['/api/productos/fotos/' + this.id]).then(() => {
            window.location.reload();
          });

        },
        error: error => {
          Swal.fire({
            icon: 'error',
            timer: 4000,
            title: 'Ops...',
            text: "Se produjo un error, por favor vuelve a intentarlo"
          });
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: "La foto debe tener un formato permitido: PNG|JPG"
      });
    }
  }

  eliminar(id:any) {
    Swal.fire({
      title: '¿Realmente desea eliminar este registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'NO',
      confirmButtonText: 'SI'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.deleteProductosFotos(id).subscribe({
          next: data => {
            if (data.estado == 'ok') {
              Swal.fire({
                icon: 'success',
                timer: 4000,
                title: 'OK',
                text: "Se eliminó el registro exitosamente"
              });
              this.router.navigate(['/api/productos/fotos/' + this.id]).then(() => {
                window.location.reload();
              });
            } else {
              Swal.fire({
                icon: 'error',
                timer: 2000,
                title: 'Ups!',
                text: "No es posible eliminar el registro"
              });
            }
          },
          error: error => {

            console.error('Error', error);
          }
        });

      }
    });
  }
}
