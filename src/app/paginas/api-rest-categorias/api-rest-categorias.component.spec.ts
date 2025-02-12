import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRestCategoriasComponent } from './api-rest-categorias.component';

describe('ApiRestCategoriasComponent', () => {
  let component: ApiRestCategoriasComponent;
  let fixture: ComponentFixture<ApiRestCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiRestCategoriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiRestCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
