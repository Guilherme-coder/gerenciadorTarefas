import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { TasksModule } from './tasks/tasks.module';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TasksModule,
    HttpClientModule,
    ErrorsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
