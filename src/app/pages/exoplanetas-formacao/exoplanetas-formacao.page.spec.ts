import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoplanetasFormacaoPage } from './exoplanetas-formacao.page';

describe('ExoplanetasFormacaoPage', () => {
  let component: ExoplanetasFormacaoPage;
  let fixture: ComponentFixture<ExoplanetasFormacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoplanetasFormacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoplanetasFormacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
