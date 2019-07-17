import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuracoNegroEstruturaPage } from './buraco-negro-estrutura.page';

describe('BuracoNegroEstruturaPage', () => {
  let component: BuracoNegroEstruturaPage;
  let fixture: ComponentFixture<BuracoNegroEstruturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuracoNegroEstruturaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuracoNegroEstruturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
