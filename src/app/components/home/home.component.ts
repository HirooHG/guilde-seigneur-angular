import { Component, WritableSignal } from '@angular/core';
import { LoadingState } from '../../core/states/loading.state';
import { MatIcon } from '@angular/material/icon';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { ErrorComponent } from '../../shared/components/error/error.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { GuildsService } from '../../core/services/guilds.service';
import { Guild } from '../../shared/models/guild';
import { GuildCasteItemComponent } from './guild-caste-item/guild-caste-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIcon,
    ErrorComponent,
    LoadingComponent,
    MatTabGroup,
    MatTab,
    GuildCasteItemComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  guilds: WritableSignal<Guild[] | null>;

  constructor(
    protected readonly loadingState: LoadingState,
    protected readonly guildService: GuildsService,
  ) {
    this.guilds = guildService.guilds;
  }
}
