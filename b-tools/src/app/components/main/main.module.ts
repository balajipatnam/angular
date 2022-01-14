/**
 * Created BY Balaji
 * Last Last Modified By Balaji on 10/10/2018
 * Last Modified Description : Added Comment
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MainRoutes } from './main.routing';
import { MatIconModule } from '@angular/material/icon';
import { FileUploadComponent } from '../shared/components/file-upload/file-upload.component';
import { FileUploadProgressComponent } from '../shared/components/file-upload/file-upload-progress/file-upload-progress.component';
import { DndDirective } from '../shared/components/file-upload/dnd.directive';
import { FileUploadModule } from '../shared/components/file-upload/file-upload.module';

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    RouterModule.forChild(MainRoutes),
  ],
  declarations: [
    HomeComponent,
    // FileUploadComponent,
    // FileUploadProgressComponent,
    // DndDirective,
  ],
})
export class MainModule {}
