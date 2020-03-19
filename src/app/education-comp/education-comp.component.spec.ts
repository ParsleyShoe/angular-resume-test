import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCompComponent } from './education-comp.component';

describe('EducationCompComponent', () => {
  let component: EducationCompComponent;
  let fixture: ComponentFixture<EducationCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
