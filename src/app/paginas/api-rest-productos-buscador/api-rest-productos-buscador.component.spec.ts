import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRestProductosBuscadorComponent } from './api-rest-productos-buscador.component';

describe('ApiRestProductosBuscadorComponent', () => {
  let component: ApiRestProductosBuscadorComponent;
  let fixture: ComponentFixture<ApiRestProductosBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiRestProductosBuscadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiRestProductosBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
