import { Proposta } from './../proposta';
import { Component, OnInit, Input } from '@angular/core';
import { PropostaService } from '../proposta.service';
import { PropostaListComponent } from '../proposta-list/proposta-list.component';

@Component({
  selector: 'app-proposta-details',
  templateUrl: './proposta-details.component.html',
  styleUrls: ['./proposta-details.component.css']
})
export class PropostaDetailsComponent implements OnInit {

  @Input() proposta: Proposta;

  constructor(private propostaService: PropostaService, private listComponent: PropostaListComponent) { }

  ngOnInit() {
  }
}