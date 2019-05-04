import { PropostaDetailsComponent } from './proposta-details/proposta-details.component';
import { CreatePropostaComponent } from './create-proposta/create-proposta.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropostaListComponent } from './proposta-list/proposta-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'proposta', pathMatch: 'full' },
  { path: 'proposta', component: PropostaListComponent },
  { path: 'add', component: CreatePropostaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }