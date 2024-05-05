import { Building } from './building';
import { Caste } from './caste';
import { Guild } from './guild';
import { Image } from './image';

export interface Animal {
  _id: string;
  name: string;
  rate: number;
  strength: number;
  caste: Caste;
  image: Image;
  castle: Building;
  guild: Guild;
}
