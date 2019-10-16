import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkSoulsFourPage } from './dark-souls-four.page';

describe('DarkSoulsFourPage', () => {
  let component: DarkSoulsFourPage;
  let fixture: ComponentFixture<DarkSoulsFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkSoulsFourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkSoulsFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
