import { Observable } from "rxjs";
import { PropostaService } from "./../proposta.service";
import { Proposta } from "./../proposta";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-proposta-list",
  templateUrl: "./proposta-list.component.html",
  styleUrls: ["./proposta-list.component.css"]
})
export class PropostaListComponent implements OnInit {
  proposta: Observable<Proposta[]>;

  constructor(private propostaService: PropostaService) {}
  

    public sexoClass = [
        {
            name: "Masculino",
            gender: "M"
        },
        {
            name: "Feminino",
            gender: "F"
        }
	]
		
    public estadoCivilClass = [
        {
            name: "CASADO(A)",
            marital: "CA"
        },
        {
            name: "DIVORCIADO(A)",
            marital: "DI"
        },
        {
            name: "SOLTEIRO(A)",
            marital: "SO"
        },
        {
            name: "VIÚVO(A)",
            marital: "VI"
        }		
	]		

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.proposta = this.propostaService.getPropostaList();
  }
  
  deleteProposta(id: number) {
    this.propostaService.deleteProposta(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }  

}