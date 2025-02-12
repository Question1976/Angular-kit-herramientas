import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formularios2Component } from './formularios2.component';

describe('Formularios2Component', () => {
  let component: Formularios2Component;
  let fixture: ComponentFixture<Formularios2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Formularios2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Formularios2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
