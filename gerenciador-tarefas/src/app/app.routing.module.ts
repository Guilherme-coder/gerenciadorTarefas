import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksFormComponent } from './tasks/tasks-form/tasks-form.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';

const routes: Routes = [
    { path: '', component: TasksListComponent },
    { path: 'tarefas/listar', component: TasksListComponent },
    { path: 'tarefas/cadastrar', component: TasksFormComponent },
    { path: 'tarefas/cadastrar/:id', component: TasksFormComponent },
    { path: 'tarefas/editar/:id', component: TaskEditComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}