import { Caste } from './caste';
import { Image } from './image';

export interface Building {
  id: string;
  name: string;
  rate: number;
  strength: number;
  caste: Caste;
  image: Image;
}
