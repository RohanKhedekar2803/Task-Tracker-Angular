import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { Subject,Observable , Subscription  } from "rxjs";
import { UiServiceeService } from 'src/app/services/ui-servicee.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() newtask=new EventEmitter();
    task :string ="";
    day :string ="";
    reminder:boolean = false;
    AddTaskvisible :boolean=false;
    subscription :Subscription;
  
    constructor(private uiservice : UiServiceeService){
       this.subscription=this.uiservice.onToggle().subscribe((value)=>this.AddTaskvisible = value)
    }

    onSubmit():void{
      if(this.task===''){
        alert('please add task')
      }
      else{
        const newTask1={
          data :this.task,
          day :this.day,
          reminder :this.reminder
        }
        
        this.newtask.emit(newTask1);
      }
      this.task="",
      this.day="",
      this.reminder=false
    }
 
    
}
