import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoplanetasPage } from './exoplanetas.page';

describe('ExoplanetasPage', () => {
  let component: ExoplanetasPage;
  let fixture: ComponentFixture<ExoplanetasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoplanetasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoplanetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
