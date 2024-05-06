import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CastlesComponent } from './components/castles/castles.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { EquipmentsComponent } from './components/equipments/equipments.component';
import { ArtifactsComponent } from './components/artifacts/artifacts.component';
import { EditComponent } from './components/edit/edit.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'castles',
    component: CastlesComponent,
  },
  {
    path: 'animals',
    component: AnimalsComponent,
  },
  {
    path: 'equipments',
    component: EquipmentsComponent,
  },
  {
    path: 'artifacts',
    component: ArtifactsComponent,
  },
  {
    path: 'edit',
    component: EditComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full',
  },
];
