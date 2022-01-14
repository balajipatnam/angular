import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file-upload-progress',
  templateUrl: './file-upload-progress.component.html',
  styleUrls: ['./file-upload-progress.component.scss'],
})
export class FileUploadProgressComponent implements OnInit {
  @Input() progress = 0;
  constructor() {}

  ngOnInit() {}
}
