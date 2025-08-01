import { Component, HostBinding, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './shared/nav-bar/nav-bar';
import { SideBar } from './shared/side-bar/side-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, SideBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('client');
  public darkmode = signal<boolean>(false);

  toggleDarkMode(): void {
    this.darkmode.set(!this.darkmode());
  }

  @HostBinding('class.dark') get mode() {
    return this.darkmode();
  }
}
