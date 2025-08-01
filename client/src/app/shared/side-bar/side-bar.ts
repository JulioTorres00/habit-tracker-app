import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  imports: [],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css',
})
export class SideBar {
  public collapseView = signal<boolean>(false);

  toggleCollapsedView(): void {
    this.collapseView.update((value) => !value);
  }
}
