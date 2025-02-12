import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRestCategoriasEditComponent } from './api-rest-categorias-edit.component';

describe('ApiRestCategoriasEditComponent', () => {
  let component: ApiRestCategoriasEditComponent;
  let fixture: ComponentFixture<ApiRestCategoriasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiRestCategoriasEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiRestCategoriasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
