import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriasRequest } from '../interfaces/categorias_request';
import { ProductosRequest } from '../interfaces/productos_request';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  api:string;
  cabecero = {
    'content-type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzYsImlhdCI6MTczODA5MDAzOSwiZXhwIjoxNzQwNjgyMDM5fQ.giWezlrjt2Ryt-LgH_Ybsb3rss9-MJUmwWcQ39peHpk'
  }

  cabecero_upload = {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzYsImlhdCI6MTczODA5MDAzOSwiZXhwIjoxNzQwNjgyMDM5fQ.giWezlrjt2Ryt-LgH_Ybsb3rss9-MJUmwWcQ39peHpk'
  }

  constructor(private http: HttpClient) {
    this.api = environment.api;
  }

  /**
   * === CATEGORÍAS ===
   */
  getCategorias():Observable<any> {
    return this.http.get(`${this.api}categorias`, {headers: this.cabecero});
  }

  getCategoriasPorId(id: any):Observable<any> {
    return this.http.get(`${this.api}categorias/${id}`, {headers: this.cabecero});
  }

  getCategoriasPorSlug(slug: any):Observable<any> {
    return this.http.get(`${this.api}categorias-slug/${slug}`, {headers: this.cabecero});
  }

  addCategorias(modelo: CategoriasRequest):Observable<any> {
    return this.http.post(`${this.api}categorias`, modelo, {headers: this.cabecero});
  }

  editCategorias(modelo: CategoriasRequest, id: any):Observable<any> {
    return this.http.put(`${this.api}categorias/${id}`, modelo, {headers: this.cabecero});
  }

  deleteCategorias(id: any):Observable<any> {
    return this.http.delete(`${this.api}categorias/${id}`, {headers: this.cabecero});
  }
  
  /**
   * === PRODUCTOS ===
   */
  getProductos(page: any):Observable<any> {
    return this.http.get(`${this.api}productos?page=${page}`, {headers: this.cabecero});
  }
  
  getProductosCategoria(slug: any, page: any):Observable<any> {
    return this.http.get(`${this.api}productos-buscar/${slug}?page=${page}`, {headers: this.cabecero});
  }
  
  getProductosBuscar(page: any, search: any):Observable<any> {
    return this.http.get(`${this.api}productos-buscar?page=${page}&search=${search}`, {headers: this.cabecero});
  }
  
  addProductos(modelo: ProductosRequest):Observable<any> {
    return this.http.post(`${this.api}productos`, modelo, {headers: this.cabecero});
  }

  getProductosPorId(id: any):Observable<any> {
    return this.http.get(`${this.api}productos/${id}`, {headers: this.cabecero});
  }

  editProductos(modelo: ProductosRequest, id: any):Observable<any> {
    return this.http.put(`${this.api}productos/${id}`, modelo, {headers: this.cabecero});
  }

  deleteProductos(id: any):Observable<any> {
    return this.http.delete(`${this.api}productos/${id}`, {headers: this.cabecero});
  }

  getProductosFotos(id: any):Observable<any> {
    return this.http.get(`${this.api}productos-fotos/${id}`, {headers: this.cabecero});
  }

  addProductosFotos(productos_id: any, imagen: any):Observable<any> {
    let formData = new FormData();
    formData.append('imagen', imagen);
    formData.append('productos_id', productos_id);
    return this.http.post(`${this.api}productos-fotos`, formData, {headers: this.cabecero_upload});
  }

  deleteProductosFotos(id: any):Observable<any> {
    return this.http.delete(`${this.api}productos-fotos/${id}`, {headers: this.cabecero})
  }
}
