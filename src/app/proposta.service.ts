import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropostaService {

  private baseUrl = 'http://localhost:8080/api/v1/proposta';

  constructor(private http: HttpClient) { }

  createProposta(proposta: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, proposta);
  }

  getPropostaList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  } 
 
  deleteProposta(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  } 
}