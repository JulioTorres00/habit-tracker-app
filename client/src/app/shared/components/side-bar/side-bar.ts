import { Component, HostListener, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { TabsConfig } from '../../../core/models/tabs-config.model';
import { SideBarTabs } from './../../config/side-bar-tabs.config';

@Component({
  selector: 'app-side-bar',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css',
})
export class SideBar implements OnInit {
  private collapseThreshold = 768;
  public faAnglesLeft = faAnglesLeft;
  public faAnglesRight = faAnglesRight;
  public sideBarTabs: TabsConfig[] = SideBarTabs;
  public isViewCollapsed = signal<boolean>(false);

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
