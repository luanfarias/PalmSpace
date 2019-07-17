import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxiaPage } from './galaxia.page';

describe('GalaxiaPage', () => {
  let component: GalaxiaPage;
  let fixture: ComponentFixture<GalaxiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
