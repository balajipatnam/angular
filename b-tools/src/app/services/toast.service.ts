import { Injectable, Inject } from '@angular/core';

import { Component } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
@Component({
  selector: 'app-snack-bar',
  template: `<div class="snackbar">
    <div class="snackbar-content">
      <mat-icon class="icon1" *ngIf="data.type === 'error'">block</mat-icon>
      <mat-icon class="icon1 warning" *ngIf="data.type === 'warning'"
        >block</mat-icon
      >
      <mat-icon class="icon1 green" *ngIf="data.type === 'success'"
        >check</mat-icon
      >
      <b class="ml-10">{{
        data.type === 'error'
          ? 'Failed'
          : data.type === 'warning'
          ? 'Warning'
          : 'Success'
      }}</b>
      <mat-icon class="icon2" (click)="close()">close</mat-icon>
    </div>
    <div class="pl-30">{{ data.message }}</div>
  </div>`,
  styles: [
    `
      .snackbar-content {
        display: flex;
        align-items: center;
      }
      .icon1 {
        color: #ed502b;
        cursor: pointer;
        font-size: 24px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .green {
        color: #34b514;
        border: 2px solid #34b514;
      }
      .warning {
        color: gold;
      }
      .icon2 {
        color: #ada6a6;
        margin-left: auto;
        cursor: pointer;
        font-size: 20px;
      }
      .pl-30 {
        color: #757575;
        padding-left: 35px;
        padding-top: 5px;
      }
      .ml-10 {
        margin-left: 10px;
        font-size: 16px;
      }
    `,
  ],
})
export class SnackbarComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private snackBar: MatSnackBar
  ) {}
  close() {
    this.snackBar.dismiss();
  }
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}

  success(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 10000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['green-snackbar'],
      data: {
        type: 'success',
        message,
      },
    });
  }
  error(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 10000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['red-snackbar'],
      data: {
        type: 'error',
        message,
      },
    });
  }
  warning(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 10000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['yellow-snackbar'],
      data: {
        type: 'warning',
        message,
      },
    });
  }
}
