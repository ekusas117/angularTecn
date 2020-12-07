import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorDetailComponent } from './selector-detail.component';

describe('SelectorDetailComponent', () => {
  let component: SelectorDetailComponent;
  let fixture: ComponentFixture<SelectorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
