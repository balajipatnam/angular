import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { DndDirective } from './dnd.directive';
import { FileUploadProgressComponent } from './file-upload-progress/file-upload-progress.component';

// const modules: any = [];
const declarations: any = [
  FileUploadComponent,
  FileUploadProgressComponent,
  DndDirective,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...declarations],
  exports: [...declarations],
})
export class FileUploadModule {}
