import { PropostaService } from './../proposta.service';
import { Proposta } from './../proposta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-proposta',
  templateUrl: './create-proposta.component.html',
  styleUrls: ['./create-proposta.component.css']
})
export class CreatePropostaComponent implements OnInit {

  proposta: Proposta = new Proposta();
  submitted = false;

  constructor(private propostaService: PropostaService) { }

  ngOnInit() {
  }

  newProposta(): void {
    this.submitted = false;
    this.proposta = new Proposta();
  }

  save() {
    this.propostaService.createProposta(this.proposta)
      .subscribe(data => console.log(data), error => console.log(error));
    this.proposta = new Proposta();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}