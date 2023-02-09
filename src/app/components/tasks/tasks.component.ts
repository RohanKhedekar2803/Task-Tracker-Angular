import { Component } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
    tasks: Task[] =[];
    showAdd: Boolean=false;
       
    

    constructor(private taskservice :TaskService){
    }
    ngOnInit(): void{
      this.taskservice.getTasks().subscribe((task) =>{this.tasks=task});
    }

    deletetask(task: any): void{
      // console.log('ondelete triggered')
      this.taskservice.deleteTask(task).subscribe(()=>this.tasks=this.tasks.filter(t => t.id!==task.id))
      
    }
    toggle(task :Task):void{
      task.reminder= !task.reminder;
      this.taskservice.updatetoggle(task).subscribe();
      
    }
    Addtask(task : Task): void{
      this.taskservice.add(task).subscribe((task)=>this.tasks.push(task));
    }
    
}
