import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrelaTipoPage } from './estrela-tipo.page';

describe('EstrelaTipoPage', () => {
  let component: EstrelaTipoPage;
  let fixture: ComponentFixture<EstrelaTipoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrelaTipoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrelaTipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
