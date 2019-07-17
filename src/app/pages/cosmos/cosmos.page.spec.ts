import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmosPage } from './cosmos.page';

describe('CosmosPage', () => {
  let component: CosmosPage;
  let fixture: ComponentFixture<CosmosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
