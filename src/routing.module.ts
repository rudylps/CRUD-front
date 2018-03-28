import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAffairesComponent } from './app/list-affaires/list-affaires.component';
import { AffaireDetailComponent } from './app/affaire-detail/affaire-detail.component';
import { AddAffaireComponent } from './app/add-affaire/add-affaire.component';


const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/affaires'
  },
  {
    path: 'affaire/:id',
    component: AffaireDetailComponent,
  },
  {
    component: ListAffairesComponent,
    path: 'affaires'
  },
  {
    component: AddAffaireComponent,
    path: 'ajoutAffaire'
  },
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule {}