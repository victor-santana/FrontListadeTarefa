
import { Tarefa } from './../../models/tarefa.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
   baseUrl: string = "https://localhost:5001/lista";

  constructor(private httpClient: HttpClient) { }


  ler(): Observable<Tarefa[]>{
    return this.httpClient.get<Tarefa[]>(this.baseUrl);
  }

  lerConcluidas(): Observable<Tarefa[]> {
    return this.httpClient.get<Tarefa[]>(`${this.baseUrl}/recuperarConcluidas`);
  }

  marcarConcluida(id: Number){
    return this.httpClient.put(`${this.baseUrl}/marcarTarefa/${id}`, id);
  }

  desmarcarConcluida(id: Number){
    return this.httpClient.put(`${this.baseUrl}/desmarcarTarefa/${id}`, id);
  }


  lerApartirId(id: string): Observable<Tarefa>{
    return this.httpClient.get<Tarefa>(`${this.baseUrl}/${id}`);
  }

  novaTarefa(novaTarefa: Tarefa): Observable<Tarefa>{
    return this.httpClient.post<Tarefa>(this.baseUrl, novaTarefa);
  }

  autalizaTarefa(tarefa: Tarefa): Observable<Tarefa>{
    const url = `${this.baseUrl}/${tarefa.id}`;
    return this.httpClient.put<Tarefa>(url, tarefa);
  }

  apaga(id: number): Observable<Tarefa>{
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<Tarefa>(url);
  }

}
