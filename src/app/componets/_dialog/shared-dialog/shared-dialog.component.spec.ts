import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDialogComponent } from './shared-dialog.component';

describe('SharedDialogComponent', () => {
  let component: SharedDialogComponent;
  let fixture: ComponentFixture<SharedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
