import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRestProductosAddComponent } from './api-rest-productos-add.component';

describe('ApiRestProductosAddComponent', () => {
  let component: ApiRestProductosAddComponent;
  let fixture: ComponentFixture<ApiRestProductosAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiRestProductosAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiRestProductosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
