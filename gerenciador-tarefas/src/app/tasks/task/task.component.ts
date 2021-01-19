import { Component, Input } from "@angular/core";

@Component({
    selector: 'gt-task',
    templateUrl: 'task.component.html'
})
export class TaskComponent {
  @Input() url;
  @Input() description;
}