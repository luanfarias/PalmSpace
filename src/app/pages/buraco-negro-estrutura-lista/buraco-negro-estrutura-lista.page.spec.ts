import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuracoNegroEstruturaListaPage } from './buraco-negro-estrutura-lista.page';

describe('BuracoNegroEstruturaListaPage', () => {
  let component: BuracoNegroEstruturaListaPage;
  let fixture: ComponentFixture<BuracoNegroEstruturaListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuracoNegroEstruturaListaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuracoNegroEstruturaListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
