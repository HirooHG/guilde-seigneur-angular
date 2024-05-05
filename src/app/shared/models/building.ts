import { Caste } from './caste';
import { Guild } from './guild';
import { Image } from './image';

export interface Building {
  _id: string;
  name: string;
  rate: number;
  strength: number;
  caste: Caste;
  image: Image;
  guild: Guild;
}
