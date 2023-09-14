import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POSComponentComponent } from './pos-component.component';

describe('POSComponentComponent', () => {
  let component: POSComponentComponent;
  let fixture: ComponentFixture<POSComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [POSComponentComponent]
    });
    fixture = TestBed.createComponent(POSComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
