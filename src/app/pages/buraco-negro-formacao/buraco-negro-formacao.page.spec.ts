import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuracoNegroFormacaoPage } from './buraco-negro-formacao.page';

describe('BuracoNegroFormacaoPage', () => {
  let component: BuracoNegroFormacaoPage;
  let fixture: ComponentFixture<BuracoNegroFormacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuracoNegroFormacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuracoNegroFormacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
