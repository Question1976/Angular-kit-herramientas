import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css'
})
export class GraficosComponent implements OnInit {

  /**
   * Datos del gráfico
   */
  titulo = 'Mi gráfica';
  datos = [
    ['PHP', 2500],
    ['Java', 4000],
    ['Python', 2000],
    ['JS', 1500],
    ['C#', 1900],
  ];
  
  columnas = ['Lenguajes', 'Profesionales'];
  opciones = 
  {
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    is3D: true
  };
  tipo: ChartType = ChartType.PieChart;   // gráfica tipo tarta

  constructor() {}
  
  ngOnInit(): void {
  }

}
