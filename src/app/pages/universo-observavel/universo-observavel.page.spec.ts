import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversoObservavelPage } from './universo-observavel.page';

describe('UniversoObservavelPage', () => {
  let component: UniversoObservavelPage;
  let fixture: ComponentFixture<UniversoObservavelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversoObservavelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversoObservavelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
