import { Component } from '@angular/core';

@Component({
  selector: 'my-master',
  template: `<main id="main">
    <div class="layout">
      <router-outlet></router-outlet>
    </div>
  </main> `,
  styles: [``],
})
export class MainLayoutComponent {
  ngOnInit() {}
}
