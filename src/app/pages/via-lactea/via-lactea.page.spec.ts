import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaLacteaPage } from './via-lactea.page';

describe('ViaLacteaPage', () => {
  let component: ViaLacteaPage;
  let fixture: ComponentFixture<ViaLacteaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViaLacteaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaLacteaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
