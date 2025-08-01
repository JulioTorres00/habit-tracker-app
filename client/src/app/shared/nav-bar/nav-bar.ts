import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  public darkmode = signal<boolean>(false);
  public darkmodeToggleEvent = output<void>();

  toggleDarkMode(): void {
    this.darkmode.set(!this.darkmode());
    this.darkmodeToggleEvent.emit();
  }
}
