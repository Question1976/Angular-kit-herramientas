import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRestCategoriasAddComponent } from './api-rest-categorias-add.component';

describe('ApiRestCategoriasAddComponent', () => {
  let component: ApiRestCategoriasAddComponent;
  let fixture: ComponentFixture<ApiRestCategoriasAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiRestCategoriasAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiRestCategoriasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
