import { Caste } from './caste';
import { Image } from './image';

export interface Artifact {
  _id: string;
  name: string;
  caste: Caste;
  image: Image;
}
