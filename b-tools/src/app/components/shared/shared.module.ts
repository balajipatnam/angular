import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material/material.module';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule, FormsModule, MaterialModule],
  declarations: [],
  exports: [ReactiveFormsModule, FormsModule, MaterialModule],
  entryComponents: [],
})
export class SharedModule {}
