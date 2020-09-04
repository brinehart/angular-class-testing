import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './list/character-list.component';
import { CharacterDisplayComponent } from './display/character-display.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: 'display/:id', component: CharacterDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule {}
