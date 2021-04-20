import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbooksComponent } from './adminbooks.component';

describe('AdminbooksComponent', () => {
  let component: AdminbooksComponent;
  let fixture: ComponentFixture<AdminbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
