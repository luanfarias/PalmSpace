import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuracoNegroSingularidadePage } from './buraco-negro-singularidade.page';

describe('BuracoNegroSingularidadePage', () => {
  let component: BuracoNegroSingularidadePage;
  let fixture: ComponentFixture<BuracoNegroSingularidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuracoNegroSingularidadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuracoNegroSingularidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
