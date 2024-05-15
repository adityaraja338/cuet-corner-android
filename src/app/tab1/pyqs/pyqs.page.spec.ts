import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PyqsPage } from './pyqs.page';

describe('PyqsPage', () => {
  let component: PyqsPage;
  let fixture: ComponentFixture<PyqsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PyqsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
