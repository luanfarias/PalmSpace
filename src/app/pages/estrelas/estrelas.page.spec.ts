import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrelasPage } from './estrelas.page';

describe('EstrelasPage', () => {
  let component: EstrelasPage;
  let fixture: ComponentFixture<EstrelasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrelasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrelasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
