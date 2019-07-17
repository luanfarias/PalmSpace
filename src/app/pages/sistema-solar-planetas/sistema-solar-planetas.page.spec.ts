import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaSolarPlanetasPage } from './sistema-solar-planetas.page';

describe('SistemaSolarPlanetasPage', () => {
  let component: SistemaSolarPlanetasPage;
  let fixture: ComponentFixture<SistemaSolarPlanetasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaSolarPlanetasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaSolarPlanetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
