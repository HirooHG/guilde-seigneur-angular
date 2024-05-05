import { Caste } from './caste';
import { Image } from './image';

export interface Equipment {
  _id: string;
  name: string;
  caste: Caste;
  image: Image;
}
