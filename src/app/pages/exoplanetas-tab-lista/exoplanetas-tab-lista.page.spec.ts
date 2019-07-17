import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoplanetasTabListaPage } from './exoplanetas-tab-lista.page';

describe('ExoplanetasTabListaPage', () => {
  let component: ExoplanetasTabListaPage;
  let fixture: ComponentFixture<ExoplanetasTabListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoplanetasTabListaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoplanetasTabListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
