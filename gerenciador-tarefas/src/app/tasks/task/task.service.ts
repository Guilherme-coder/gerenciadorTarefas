import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const api = 'http://localhost:3000'

@Injectable({providedIn: 'root'})
export class TaskService{
    constructor(private http: HttpClient){}
    
    list(){
        return this.http
        .get<any[]>(api + '/tarefas');   
    }


        
}
