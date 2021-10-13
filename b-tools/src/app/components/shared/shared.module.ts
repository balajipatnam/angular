import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  declarations: [],
  exports: [ReactiveFormsModule, FormsModule],
  entryComponents: [],
})
export class SharedModule {}
