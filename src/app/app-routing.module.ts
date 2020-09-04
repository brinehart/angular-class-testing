import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameComponent } from './components/name/name.component';


const routes: Routes = [
  { path: 'what-is-your-name', component: NameComponent },
  {
    path: 'character',
    loadChildren: () => import('./components/character/character.module').then(m => m.CharacterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
