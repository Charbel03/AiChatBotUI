import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetChatDialogComponent } from './reset-chat-dialog.component';

describe('ResetChatDialogComponent', () => {
  let component: ResetChatDialogComponent;
  let fixture: ComponentFixture<ResetChatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetChatDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetChatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
