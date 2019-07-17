import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorarCosmosMostrarPage } from './explorar-cosmos-mostrar.page';

describe('ExplorarCosmosMostrarPage', () => {
  let component: ExplorarCosmosMostrarPage;
  let fixture: ComponentFixture<ExplorarCosmosMostrarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorarCosmosMostrarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorarCosmosMostrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
