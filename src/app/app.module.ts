import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePropostaComponent } from './create-proposta/create-proposta.component';
import { PropostaDetailsComponent } from './proposta-details/proposta-details.component';
import { PropostaListComponent } from './proposta-list/proposta-list.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CreatePropostaComponent,
    PropostaDetailsComponent,
    PropostaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }