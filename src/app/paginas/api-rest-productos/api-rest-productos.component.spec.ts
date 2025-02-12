import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRestProductosComponent } from './api-rest-productos.component';

describe('ApiRestProductosComponent', () => {
  let component: ApiRestProductosComponent;
  let fixture: ComponentFixture<ApiRestProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiRestProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiRestProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
