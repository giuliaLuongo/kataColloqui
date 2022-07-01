import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyDetailComponent } from './academy-detail.component';

describe('AcademyDetailComponent', () => {
  let component: AcademyDetailComponent;
  let fixture: ComponentFixture<AcademyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
