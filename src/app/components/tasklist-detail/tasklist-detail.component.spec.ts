import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistDetailComponent } from './tasklist-detail.component';

describe('TasklistDetailComponent', () => {
  let component: TasklistDetailComponent;
  let fixture: ComponentFixture<TasklistDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasklistDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
