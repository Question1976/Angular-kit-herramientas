import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRestProductosPorCategoriaComponent } from './api-rest-productos-por-categoria.component';

describe('ApiRestProductosPorCategoriaComponent', () => {
  let component: ApiRestProductosPorCategoriaComponent;
  let fixture: ComponentFixture<ApiRestProductosPorCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiRestProductosPorCategoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiRestProductosPorCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
