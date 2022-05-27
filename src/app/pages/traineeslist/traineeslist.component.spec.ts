import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeslistComponent } from './traineeslist.component';

describe('TraineeslistComponent', () => {
  let component: TraineeslistComponent;
  let fixture: ComponentFixture<TraineeslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
