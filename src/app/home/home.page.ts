import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private htmlRoot = document.documentElement;
  currentDirection = this.htmlRoot.getAttribute('dir') || 'ltr';

  toggleDirection() {
    if (this.currentDirection === 'ltr') {
      this.currentDirection = 'rtl';
    } else if (this.currentDirection === 'rtl') {
      this.currentDirection = 'ltr';
    }

    this.htmlRoot.setAttribute('dir', this.currentDirection);
  }
}
