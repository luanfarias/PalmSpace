import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaSolarAsteroidesPage } from './sistema-solar-asteroides.page';

describe('SistemaSolarAsteroidesPage', () => {
  let component: SistemaSolarAsteroidesPage;
  let fixture: ComponentFixture<SistemaSolarAsteroidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaSolarAsteroidesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaSolarAsteroidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
