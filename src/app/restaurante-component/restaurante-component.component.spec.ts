import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteComponentComponent } from './restaurante-component.component';

describe('RestauranteComponentComponent', () => {
  let component: RestauranteComponentComponent;
  let fixture: ComponentFixture<RestauranteComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestauranteComponentComponent]
    });
    fixture = TestBed.createComponent(RestauranteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
