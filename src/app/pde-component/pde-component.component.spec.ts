import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDEComponentComponent } from './pde-component.component';

describe('PDEComponentComponent', () => {
  let component: PDEComponentComponent;
  let fixture: ComponentFixture<PDEComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PDEComponentComponent]
    });
    fixture = TestBed.createComponent(PDEComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
