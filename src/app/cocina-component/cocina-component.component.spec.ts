import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocinaComponentComponent } from './cocina-component.component';

describe('CocinaComponentComponent', () => {
  let component: CocinaComponentComponent;
  let fixture: ComponentFixture<CocinaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocinaComponentComponent]
    });
    fixture = TestBed.createComponent(CocinaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
