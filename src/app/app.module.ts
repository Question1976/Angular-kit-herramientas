import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleChartsModule } from 'angular-google-charts';

import { CookieService } from 'ngx-cookie-service';

import { ValidaSelectDirective } from './validaciones/valida-select.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { FormulariosComponent } from './paginas/formularios/formularios.component';
import { ErrorComponent } from './paginas/error/error.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { Formularios2Component } from './paginas/formularios2/formularios2.component';
import { GraficosComponent } from './paginas/graficos/graficos.component';
import { MapasComponent } from './paginas/mapas/mapas.component';
import { ApiRestComponent } from './paginas/api-rest/api-rest.component';
import { ApiRestCategoriasComponent } from './paginas/api-rest-categorias/api-rest-categorias.component';
import { ApiRestCategoriasAddComponent } from './paginas/api-rest-categorias-add/api-rest-categorias-add.component';
import { ApiRestCategoriasEditComponent } from './paginas/api-rest-categorias-edit/api-rest-categorias-edit.component';
import { ApiRestProductosComponent } from './paginas/api-rest-productos/api-rest-productos.component';
import { ApiRestProductosPorCategoriaComponent } from './paginas/api-rest-productos-por-categoria/api-rest-productos-por-categoria.component';
import { ApiRestProductosBuscadorComponent } from './paginas/api-rest-productos-buscador/api-rest-productos-buscador.component';
import { ApiRestProductosAddComponent } from './paginas/api-rest-productos-add/api-rest-productos-add.component';
import { ApiRestProductosEditComponent } from './paginas/api-rest-productos-edit/api-rest-productos-edit.component';
import { ApiRestProductosFotosComponent } from './paginas/api-rest-productos-fotos/api-rest-productos-fotos.component';
import { AccesoLoginComponent } from './paginas/acceso-login/acceso-login.component';
import { AccesoRegistroComponent } from './paginas/acceso-registro/acceso-registro.component';
import { AccesoRestringidoComponent } from './paginas/acceso-restringido/acceso-restringido.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormulariosComponent,
    ErrorComponent,
    CabeceroComponent,
    FooterComponent,
    Formularios2Component,
    ValidaSelectDirective,
    GraficosComponent,
    MapasComponent,
    ApiRestComponent,
    ApiRestCategoriasComponent,
    ApiRestCategoriasAddComponent,
    ApiRestCategoriasEditComponent,
    ApiRestProductosComponent,
    ApiRestProductosPorCategoriaComponent,
    ApiRestProductosBuscadorComponent,
    ApiRestProductosAddComponent,
    ApiRestProductosEditComponent,
    ApiRestProductosFotosComponent,
    AccesoLoginComponent,
    AccesoRegistroComponent,
    AccesoRestringidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
