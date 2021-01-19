import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { TaskComponent } from "./task/task.component";
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksFormComponent } from './tasks-form/tasks-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskEditComponent } from './task-edit/task-edit.component';

@NgModule({
    declarations: [ TaskComponent, TasksListComponent, TasksFormComponent, TaskEditComponent ],
    imports: [ HttpClientModule, CommonModule, ReactiveFormsModule ]
})
export class TasksModule{

}