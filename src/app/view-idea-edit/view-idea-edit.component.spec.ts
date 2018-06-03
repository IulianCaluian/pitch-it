import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIdeaEditComponent } from './view-idea-edit.component';

describe('ViewIdeaEditComponent', () => {
  let component: ViewIdeaEditComponent;
  let fixture: ComponentFixture<ViewIdeaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIdeaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIdeaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
