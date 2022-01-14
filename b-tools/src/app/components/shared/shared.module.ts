import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material/material.module';
import { SnackbarComponent } from 'src/app/services/toast.service';
import { AlertDialogComponent } from './dialogs/alert-dialog/alert-dialog.component';

const modules = [ReactiveFormsModule, FormsModule, MaterialModule];
const components = [SnackbarComponent, AlertDialogComponent];

@NgModule({
  imports: [CommonModule, ...modules],
  declarations: [...components],
  exports: [...modules],
  entryComponents: [...components],
})
export class SharedModule {}
