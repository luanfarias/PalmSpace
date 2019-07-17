import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterTiposPage } from './cluster-tipos.page';

describe('ClusterTiposPage', () => {
  let component: ClusterTiposPage;
  let fixture: ComponentFixture<ClusterTiposPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterTiposPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterTiposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
