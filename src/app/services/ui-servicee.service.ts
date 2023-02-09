import { Injectable } from '@angular/core';
import { Subject,Observable,} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UiServiceeService {

  constructor() { }
  showAdd :boolean=false;
  subject = new Subject();  
  
   //create subject
   toggleadd(){
    this.showAdd = !this.showAdd
    this.subject.next(this.showAdd);
  }
  //give option to subscribers to subscribe to subject

  onToggle(): Observable<any>{
      return this.subject.asObservable();
  }

}
