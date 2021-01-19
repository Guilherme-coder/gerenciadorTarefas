import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const api = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  register(title: string, description: string, responsible: string, priority: string, status: string,  deadline: string){
    return this.http.post(api + '/tarefas', { title, description, responsible, priority, status, deadline });
  }

  edit(id: number, title: string, description: string, responsible: string, priority: string, status: string, deadline: string){
    return this.http.patch(api + `/tarefas/` + id, { title, description, responsible, priority, status, deadline })
  }

  getForId(id){
    return this.http.get<any[]>(api + `/tarefas/` + id)
  }

  remove(id){
    return this.http.delete(api + '/tarefas/' + id)
  }

  conclude(id){
    return this.http.patch(api + '/tarefas/' + id, {status: "completed"})
  }

}
