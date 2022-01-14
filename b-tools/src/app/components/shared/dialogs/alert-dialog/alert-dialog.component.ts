import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-alert-dialog',
  template: `
    <div class="dialog-container">
      <h1 mat-dialog-title class="title">{{ data.title }}</h1>
      <div mat-dialog-content class="content">
        <div>{{ data.message }}</div>
      </div>
      <div mat-dialog-actions class="actions">
        <button
          mat-raised-button
          (click)="close()"
          color="default"
          *ngIf="data.noTxt"
        >
          {{ data.noTxt }}
        </button>
        <button
          mat-raised-button
          color="primary"
          (click)="save()"
          *ngIf="data.yesTxt"
        >
          Primary
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      .mat-dialog-container {
        background: none;
      }
      .dialog-container {
        margin: -24px;
      }
      mat-form-field {
        width: 100%;
      }
      .title {
        padding: 10px 20px;
        font-size: 16px;
        font-weight: 600;
        border-bottom: 1px solid #38436c;
        margin: 0;
      }
      .content {
        padding: 40px 20px;
        margin: 0;
      }
      .actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-top: 1px solid #38436c;
        padding: 5px 20px;
      }
    `,
  ],
})
export class AlertDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close(): void {
    this.dialogRef.close(false);
  }
  save() {
    this.dialogRef.close(true);
  }
}
