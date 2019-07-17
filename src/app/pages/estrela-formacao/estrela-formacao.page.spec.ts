import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrelaFormacaoPage } from './estrela-formacao.page';

describe('EstrelaFormacaoPage', () => {
  let component: EstrelaFormacaoPage;
  let fixture: ComponentFixture<EstrelaFormacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrelaFormacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrelaFormacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
