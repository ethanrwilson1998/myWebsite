import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WormWranglersPage } from './worm-wranglers.page';

describe('WormWranglersPage', () => {
  let component: WormWranglersPage;
  let fixture: ComponentFixture<WormWranglersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WormWranglersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WormWranglersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
