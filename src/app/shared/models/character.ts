import { Caste } from './caste';
import { Guild } from './guild';
import { Image } from './image';
import { Kind } from './kind';

export interface Character {
  _id: string;
  name: string;
  surname: string;
  knowledge: string;
  intelligence: number;
  rate: number;
  strength: number;
  caste: Caste;
  image: Image;
  kind: Kind;
  guild: Guild;
  castle: CharacterBuilding;
  equipments: CharacterEquipment[];
  artifacts: CharacterArtifact[];
}

interface CharacterBuilding {
  id: string;
  name: string;
  rate: number;
  strength: number;
  caste: string;
  image: string;
}

interface CharacterEquipment {
  id: string;
  name: string;
  caste: string;
  image: string;
}

interface CharacterArtifact {
  id: string;
  name: string;
  caste: string;
  image: string;
}
