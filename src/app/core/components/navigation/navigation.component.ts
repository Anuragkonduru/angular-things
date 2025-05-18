import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAVIGATION_LINK } from '../../constants/navigation';
import { NavigationItemInterface } from '../../interfaces/interfaces';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  navigationList: Array<NavigationItemInterface> = [];

  ngOnInit(): void {
    this.navigationList = NAVIGATION_LINK;
  }
}
