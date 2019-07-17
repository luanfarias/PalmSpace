import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrelaTipoListaPage } from './estrela-tipo-lista.page';

describe('EstrelaTipoListaPage', () => {
  let component: EstrelaTipoListaPage;
  let fixture: ComponentFixture<EstrelaTipoListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrelaTipoListaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrelaTipoListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
