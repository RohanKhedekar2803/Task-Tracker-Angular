import { Component ,EventEmitter,Input, Output} from '@angular/core';
import { Task } from 'src/app/Task';
import { faArrowDown91 } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  myarrow=faArrowDown91
  @Input() task !: Task;
  @Output() ee:EventEmitter<Task>=new EventEmitter();
  @Output() toggleEmitt:EventEmitter<Task>=new EventEmitter();

  onDelete(task: Task){
    this.ee.emit(task);
  }

  toggleAlarm(task :Task){
    // console.log("2 clicks");
    this.toggleEmitt.emit(task);
    
  }
}
