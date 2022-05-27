import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedformsComponent } from './appliedforms.component';

describe('AppliedformsComponent', () => {
  let component: AppliedformsComponent;
  let fixture: ComponentFixture<AppliedformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
