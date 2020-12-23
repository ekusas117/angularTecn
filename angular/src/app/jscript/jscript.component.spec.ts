import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JscriptComponent } from './jscript.component';

describe('JscriptComponent', () => {
  let component: JscriptComponent;
  let fixture: ComponentFixture<JscriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JscriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
