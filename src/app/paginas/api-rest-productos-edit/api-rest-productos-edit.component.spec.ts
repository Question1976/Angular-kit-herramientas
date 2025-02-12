import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRestProductosEditComponent } from './api-rest-productos-edit.component';

describe('ApiRestProductosEditComponent', () => {
  let component: ApiRestProductosEditComponent;
  let fixture: ComponentFixture<ApiRestProductosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiRestProductosEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiRestProductosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
