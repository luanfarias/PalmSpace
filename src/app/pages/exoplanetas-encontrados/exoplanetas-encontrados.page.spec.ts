import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoplanetasEncontradosPage } from './exoplanetas-encontrados.page';

describe('ExoplanetasEncontradosPage', () => {
  let component: ExoplanetasEncontradosPage;
  let fixture: ComponentFixture<ExoplanetasEncontradosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoplanetasEncontradosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoplanetasEncontradosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
