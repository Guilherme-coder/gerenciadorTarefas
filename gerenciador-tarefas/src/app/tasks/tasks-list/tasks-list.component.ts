import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {


  private editor = "tarefas/editar"

  listForm: FormGroup;

  datas: any[] = [];

  responsibles: any[] = [];

  status: any[] = [];

  constructor(private taskService: TaskService, private apiService: ApiService, private formBuilder: FormBuilder, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.list()
    this.listForm = this.formBuilder.group({
      id: [''],
      title: [''],
      responsible: [''],
      status: ['']

    });
  }

  filter(){
    const id = this.listForm.get('id').value;
    const title = this.listForm.get('title').value.trim().toLowerCase();
    const responsible = this.listForm.get('responsible').value;
    const status = this.listForm.get('status').value;
    
    const tables = document.getElementsByClassName("tr_listed")

    if(id != 0){
      for(let i = 0 ; i < tables.length ; i++){
        tables[i].classList.add("inactive")
        if(tables[i].querySelector("#id").textContent == id){
          tables[i].classList.remove("inactive")
        }
      }
    }

    if(title != ""){
      for(let i = 0 ; i < tables.length ; i++){
        tables[i].classList.add("inactive")
        if(tables[i].querySelector("#title").textContent.toLowerCase() == title){
          tables[i].classList.remove("inactive")
        }
      }
    }
    
    if(responsible != ""){
      for(let i = 0 ; i < tables.length ; i++){
        tables[i].classList.add("inactive")
        if(tables[i].querySelector("#responsible").textContent.toLowerCase() == responsible){
          tables[i].classList.remove("inactive")
        }
      }
    }    

    if(status == "progress"){
      for(let i = 0 ; i < tables.length ; i++){
        tables[i].classList.add("inactive")
        if(tables[i].childNodes[3].childNodes.length == 6){
          tables[i].classList.remove("inactive")
        }
      }
    }
    if(status == "completed"){
      for(let i = 0 ; i < tables.length ; i++){
        tables[i].classList.add("inactive")
        if(tables[i].childNodes[3].childNodes.length == 5){
          tables[i].classList.remove("inactive")
        }
      }
    }

  }

  clearFilter(){
    const tables = document.getElementsByClassName("tr_listed")

    for(let i = 0 ; i < tables.length ; i++){
      tables[i].classList.remove("inactive")
    }
  }

  list(){
    this.taskService
    .list()
    .subscribe(datas => {        
      this.datas = datas
      this.datas.forEach(data => {
        if(this.responsibles.indexOf(data.responsible) == -1){
          this.responsibles.push(data.responsible)
        }       
      })        
    })     
  }

  remove(id){    
    this.apiService
      .remove(id)
      .subscribe(
        () => this.load(),
        error => console.log(error)       
        
      )

  }

  load(){
    (sessionStorage.refresh == 'true' || !sessionStorage.refresh) && location.reload();
    sessionStorage.refresh = false;
  }

  conclude(id){
    this.apiService
      .conclude(id)
      .subscribe(
        () => console.log('Task Completed'),
        error => console.log(error)        
      )
    
  }


}
