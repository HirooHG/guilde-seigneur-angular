import { Caste } from './caste';
import { Image } from './image';

export interface Artifact {
  id: string;
  name: string;
  caste: Caste;
  image: Image;
}
