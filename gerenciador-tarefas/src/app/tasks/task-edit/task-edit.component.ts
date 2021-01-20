import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  
  private datas: any[] = [];

  private userId;

  private listData: any[] = []

  addForm: FormGroup;


  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(){
    this.route.params.subscribe(params => this.userId = params['id']);
    

    this.apiService
      .getForId(this.userId)
      .subscribe(datas => {
        this.datas = datas
        this.listData = this.datas
      })
      
    this.addForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      responsible: ['', Validators.required],
      priority: ['', Validators.required],
      deadline: ['', Validators.required]
    });
  }

  edit(){
    const title = this.addForm.get('title').value.trim().toLowerCase();
    const description = this.addForm.get('description').value.trim().toLowerCase();
    const responsible = this.addForm.get('responsible').value.trim().toLowerCase();
    const priority = this.addForm.get('priority').value;
    const status = 'progress';
    const deadline = this.addForm.get('deadline').value;
    

    this.apiService
      .edit(this.userId, title, description, responsible, priority, status, deadline)
      .subscribe(
        () => {
          console.log("Edited Task")
          this.clearForm()
        },
        error => console.log(error)
      )
  }

  clearForm(){
    this.addForm = this.formBuilder.group({
      title: [''],
      description: [''],
      responsible: [''],
      priority: [''],
      deadline: ['']
    });
  }


}






