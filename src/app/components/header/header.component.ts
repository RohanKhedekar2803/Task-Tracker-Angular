import { Component } from '@angular/core';
import { Subject,Observable , Subscription  } from "rxjs";
import { UiServiceeService } from 'src/app/services/ui-servicee.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title ='Task Tracker';
  AddTask :boolean=false;
  subscription :Subscription;

  constructor(private uiservice : UiServiceeService,private router :Router){
    console.log('hi')
     this.subscription=this.uiservice.onToggle().subscribe((value)=>this.AddTask = value)
  }
  subject = new Subject();    
  toggleaddtask(): any{
    this.uiservice.toggleadd()
    console.log(this.AddTask)
  }

  hasroute(route : string){
    return route===this.router.url;
  }
}
