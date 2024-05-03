import { Building } from './building';
import { Caste } from './caste';
import { Image } from './image';

export interface Animal {
  id: string;
  name: string;
  rate: number;
  strength: number;
  caste: Caste;
  image: Image;
  castle: Building;
}
