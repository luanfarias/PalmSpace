import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrelaMortePage } from './estrela-morte.page';

describe('EstrelaMortePage', () => {
  let component: EstrelaMortePage;
  let fixture: ComponentFixture<EstrelaMortePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrelaMortePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrelaMortePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
