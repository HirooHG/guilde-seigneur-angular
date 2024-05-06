import { Injectable, signal } from '@angular/core';
import { Guild } from '../../shared/models/guild';
import { Caste } from '../../shared/models/caste';
import { Kind } from '../../shared/models/kind';
import { Artifact } from '../../shared/models/artifact';
import { Building } from '../../shared/models/building';

@Injectable({
  providedIn: 'root',
})
export class FormState {
  name = signal('');
  rate = signal(0);
  strength = signal(0);
  guild = signal<Guild | null>(null);
  caste = signal<Caste | null>(null);
  kind = signal<Kind | null>(null);
  building = signal<Building | null>(null);

  // TODO: imp
  artifacts = signal<Artifact[]>([]);
  equipments = signal<Artifact[]>([]);

  resetState() {
    this.name.set('');
    this.rate.set(0);
    this.strength.set(0);
    this.guild.set(null);
    this.guild.set(null);
    this.caste.set(null);
    this.kind.set(null);
    this.building.set(null);
    this.artifacts.set([]);
    this.equipments.set([]);
  }
}
