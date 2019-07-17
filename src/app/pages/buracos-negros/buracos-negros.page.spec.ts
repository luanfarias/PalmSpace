import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuracosNegrosPage } from './buracos-negros.page';

describe('BuracosNegrosPage', () => {
  let component: BuracosNegrosPage;
  let fixture: ComponentFixture<BuracosNegrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuracosNegrosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuracosNegrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
