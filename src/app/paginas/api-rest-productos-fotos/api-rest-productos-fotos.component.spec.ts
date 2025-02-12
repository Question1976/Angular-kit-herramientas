import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRestProductosFotosComponent } from './api-rest-productos-fotos.component';

describe('ApiRestProductosFotosComponent', () => {
  let component: ApiRestProductosFotosComponent;
  let fixture: ComponentFixture<ApiRestProductosFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiRestProductosFotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiRestProductosFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
