import { Component, output, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  imports: [FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  public isDarkmodeToggled = signal<boolean>(true);
  public darkmodeToggleEvent = output<void>();
  public faSun = faSun;
  public faMoon = faMoon;

  toggleDarkMode(): void {
    this.isDarkmodeToggled.set(!this.isDarkmodeToggled());
    this.darkmodeToggleEvent.emit();
  }
}
