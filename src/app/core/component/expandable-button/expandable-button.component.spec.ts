import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableButtonComponent } from './expandable-button.component';

describe('ExpandableButtonComponent', () => {
  let component: ExpandableButtonComponent;
  let fixture: ComponentFixture<ExpandableButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandableButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandableButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
