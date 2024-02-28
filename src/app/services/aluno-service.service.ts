import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoServiceService {
  errorMessage: any;
  baseURL = 'http://localhost:3000/alunos'

  constructor(private http: HttpClient) { }
  enviarDadosFormulario(dados: any): Observable<any> {

      const headers = { 'content-type': 'application/json'}
      const body=JSON.stringify(dados);
      //console.log(body)
      return this.http.post(this.baseURL, body,{'headers':headers})
  }


}
