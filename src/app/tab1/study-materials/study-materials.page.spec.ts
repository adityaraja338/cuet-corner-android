import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyMaterialsPage } from './study-materials.page';

describe('StudyMaterialsPage', () => {
  let component: StudyMaterialsPage;
  let fixture: ComponentFixture<StudyMaterialsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyMaterialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
