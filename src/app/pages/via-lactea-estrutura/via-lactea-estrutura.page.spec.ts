import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaLacteaEstruturaPage } from './via-lactea-estrutura.page';

describe('ViaLacteaEstruturaPage', () => {
  let component: ViaLacteaEstruturaPage;
  let fixture: ComponentFixture<ViaLacteaEstruturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViaLacteaEstruturaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaLacteaEstruturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
