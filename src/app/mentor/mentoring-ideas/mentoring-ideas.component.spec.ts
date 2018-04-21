import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoringIdeasComponent } from './mentoring-ideas.component';

describe('MentoringIdeasComponent', () => {
  let component: MentoringIdeasComponent;
  let fixture: ComponentFixture<MentoringIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentoringIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoringIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
