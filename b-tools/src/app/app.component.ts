import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: any, public router: Router) {
    let theme = localStorage.getItem('selectedTheme');
    if (theme) {
      this.setTheme(theme);
    } else {
      this.setTheme();
    }
  }

  setTheme(themeColor?: String) {
    for (let i = 0; i < this.document.body.classList.length; i++) {
      const className = this.document.body.classList[i];

      if (className.startsWith('theme-')) {
        this.document.body.classList.remove(className);
      }
    }
    localStorage.setItem(
      'selectedTheme',
      themeColor?.toString() || 'theme-purple'
    );
    this.document.body.classList.add(themeColor || 'theme-purple');
  }
}
