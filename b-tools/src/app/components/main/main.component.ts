import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { AlertDialogComponent } from '../shared/dialogs/alert-dialog/alert-dialog.component';
export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'my-master',
  template: `<main>
    <div class="layout">
      <mat-toolbar color="primary">
        <button
          mat-icon-button
          class="example-icon"
          aria-label="Example icon-button with menu icon"
        >
          <mat-icon>menu</mat-icon>
        </button>
        <span class="header-title">My App</span>
        <span class="example-spacer"></span>
        <button
          mat-icon-button
          class="example-icon favorite-icon"
          aria-label="Example icon-button with heart icon"
        >
          <mat-icon>favorite</mat-icon>
        </button>
        <button
          mat-icon-button
          class="example-icon"
          aria-label="Example icon-button with share icon"
          (click)="logout()"
        >
          <mat-icon>share</mat-icon>
        </button>
      </mat-toolbar>
      <div class="row h-100">
        <mat-list class="col-lg-2">
          <div mat-subheader>Folders</div>
          <mat-list-item *ngFor="let folder of folders">
            <mat-icon mat-list-icon>folder</mat-icon>
            <div mat-line>{{ folder.name }}</div>
            <div mat-line>{{ folder.updated | date }}</div>
          </mat-list-item>
          <mat-divider></mat-divider>
          <div mat-subheader>Notes</div>
          <mat-list-item *ngFor="let note of notes">
            <mat-icon mat-list-icon>note</mat-icon>
            <div mat-line>{{ note.name }}</div>
            <div mat-line>{{ note.updated | date }}</div>
          </mat-list-item>
        </mat-list>
        <div class="col-lg-10 h-100">
          <div class="app-wrapper">
            <div class="app-main ">
              <div class="app-content">
                <div class="app-content--inner">
                  <div class="app-content--inner__wrapper">
                    <router-outlet></router-outlet>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main> `,
  styleUrls: ['./main.component.scss'],
})
export class MainLayoutComponent {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
  ];
  constructor(
    private toastService: ToastService,
    private matDialog: MatDialog,
    private router: Router
  ) {}
  ngOnInit() {}
  logout() {
    const dialogRef = this.matDialog.open(AlertDialogComponent, {
      width: '400px',
      disableClose: true,
      panelClass: 'alert-dialog',
      data: {
        title: 'Logout',
        message: 'Are you sure you want to logout?',
        noTxt: 'No',
        yesTxt: 'Yes',
      },
    });
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.router.navigate(['/login']);
        this.toastService.success('Logged out successfully');
      }
    });
  }
}
