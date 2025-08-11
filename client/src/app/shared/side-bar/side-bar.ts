import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css',
})
export class SideBar {
  public isViewCollapsed = signal<boolean>(false);
  public faAnglesLeft = faAnglesLeft;
  public faAnglesRight = faAnglesRight;

  toggleCollapsedView(): void {
    this.isViewCollapsed.update((value) => !value);
  }
}
