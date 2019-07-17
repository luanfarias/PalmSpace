import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaLacteaMidiaPage } from './via-lactea-midia.page';

describe('ViaLacteaMidiaPage', () => {
  let component: ViaLacteaMidiaPage;
  let fixture: ComponentFixture<ViaLacteaMidiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViaLacteaMidiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaLacteaMidiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
