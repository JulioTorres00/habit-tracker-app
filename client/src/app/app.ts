import { Component, HostBinding, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { SideBar } from './shared/components/side-bar/side-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, SideBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('client');
  public isDarkmodeToggled = signal<boolean>(true);

  toggleDarkMode(): void {
    this.isDarkmodeToggled.set(!this.isDarkmodeToggled());
  }

  @HostBinding('class.dark') get mode() {
    return this.isDarkmodeToggled();
  }
}
