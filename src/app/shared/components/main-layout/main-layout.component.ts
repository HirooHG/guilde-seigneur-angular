import { Component } from '@angular/core';
import { LeftPanelComponent } from '../left-panel/left-panel.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  standalone: true,
  imports: [LeftPanelComponent, HeaderComponent, RouterModule],
})
export class MainLayoutComponent {}
