import { Component, HostBinding, signal } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  public darkmode = signal<boolean>(false);

  toggleDarkMode(): void {
    this.darkmode.set(!this.darkmode());
  }

  @HostBinding('class.dark') get mode() {
    return this.darkmode();
  }
}
