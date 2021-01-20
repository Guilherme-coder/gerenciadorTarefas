import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
 
@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.css']
})
export class TasksFormComponent implements OnInit {

  addForm: FormGroup;
    
  constructor(private formBuilder: FormBuilder, private apiService: ApiService){ }


  ngOnInit(){
    this.addForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      responsible: ['', Validators.required],
      priority: ['', Validators.required],
      deadline: ['', Validators.required]
    });
  }

  add(){
    const title = this.addForm.get('title').value.trim().toLowerCase();
    const description = this.addForm.get('description').value.trim().toLowerCase();
    const responsible = this.addForm.get('responsible').value.trim().toLowerCase();
    const priority = this.addForm.get('priority').value;
    const status = 'progress';
    const deadline = this.addForm.get('deadline').value;
    
    this.apiService
      .register(title, description, responsible, priority, status, deadline)
      .subscribe(
        () => {
          console.log("Task Added")
          this.clearForm()
        },
        (error) => console.log(error)        
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
