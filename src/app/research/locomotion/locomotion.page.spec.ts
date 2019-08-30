import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocomotionPage } from './locomotion.page';

describe('LocomotionPage', () => {
  let component: LocomotionPage;
  let fixture: ComponentFixture<LocomotionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocomotionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocomotionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
