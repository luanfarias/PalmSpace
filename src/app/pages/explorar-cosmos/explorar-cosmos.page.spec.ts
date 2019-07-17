import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorarCosmosPage } from './explorar-cosmos.page';

describe('ExplorarCosmosPage', () => {
  let component: ExplorarCosmosPage;
  let fixture: ComponentFixture<ExplorarCosmosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorarCosmosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorarCosmosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
