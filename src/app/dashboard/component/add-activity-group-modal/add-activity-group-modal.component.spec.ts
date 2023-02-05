import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityGroupModalComponent } from './add-activity-group-modal.component';

describe('AddActivityGroupModalComponent', () => {
  let component: AddActivityGroupModalComponent;
  let fixture: ComponentFixture<AddActivityGroupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActivityGroupModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddActivityGroupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
