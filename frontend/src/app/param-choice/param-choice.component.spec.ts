import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamChoiceComponent } from './param-choice.component';

describe('ParamChoiceComponent', () => {
  let component: ParamChoiceComponent;
  let fixture: ComponentFixture<ParamChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
