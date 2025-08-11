import { Component, HostListener, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAnglesLeft,
  faAnglesRight,
  faCirclePlus,
  faCalendarDay,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css',
})
export class SideBar implements OnInit {
  public isViewCollapsed = signal<boolean>(false);
  public faAnglesLeft = faAnglesLeft;
  public faAnglesRight = faAnglesRight;
  public faCirclePlus = faCirclePlus;
  public faCalendarDay = faCalendarDay;
  public faCalendarDays = faCalendarDays;
  private collapseThreshold = 768;

  @HostListener('window:resize')
  onResize() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= this.collapseThreshold) {
      this.isViewCollapsed.set(true);
    } else {
      this.isViewCollapsed.set(false);
    }
  }

  ngOnInit() {
    this.checkWindowSize();
  }

  private checkWindowSize() {
    const windowWidth = window.innerWidth;

    if (windowWidth <= this.collapseThreshold) {
      this.isViewCollapsed.set(true);
    }
  }

  public toggleCollapsedView(): void {
    this.isViewCollapsed.update((value) => !value);
  }
}
