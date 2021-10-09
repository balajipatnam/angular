import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-card',
  template: `<div class="row m-0"><ng-content></ng-content></div>`,
  styles: [`.m-0{
      margin:0;
      }
      div{
       box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.12);
    margin-bottom: 15px !important;
    background: white;
    padding: 20px;
    border-radius: 5px;
    }
    `]
})
export class MyCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}