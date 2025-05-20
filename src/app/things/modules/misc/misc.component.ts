import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-misc',
  imports: [NavigationComponent, RouterOutlet],
  templateUrl: './misc.component.html',
  styleUrl: './misc.component.scss',
})
export class MiscComponent {}
