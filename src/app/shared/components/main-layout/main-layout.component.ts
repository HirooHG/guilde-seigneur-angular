import { Component } from '@angular/core';
import { LeftPanelComponent } from '../left-panel/left-panel.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { LoadingState } from '../../../core/states/loading.state';
import { LoadingComponent } from '../loading/loading.component';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  standalone: true,
  imports: [
    LeftPanelComponent,
    HeaderComponent,
    RouterModule,
    LoadingComponent,
    ErrorComponent,
  ],
})
export class MainLayoutComponent {
  constructor(protected readonly loadingState: LoadingState) {}
}
