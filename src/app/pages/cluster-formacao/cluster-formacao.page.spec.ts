import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterFormacaoPage } from './cluster-formacao.page';

describe('ClusterFormacaoPage', () => {
  let component: ClusterFormacaoPage;
  let fixture: ComponentFixture<ClusterFormacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterFormacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterFormacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
