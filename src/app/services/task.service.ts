import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { Observable,of } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions={
  headers :new HttpHeaders({'Content-Type' : 'application/json'}),
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
   private apiurl="http://localhost:5000/tasks";
  constructor(private http:HttpClient) { }
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiurl);
  }
  deleteTask(task : any):Observable<any>{
    return this.http.delete<any>(`${this.apiurl}/${task.id}`);
  }
  updatetoggle(task : Task):Observable<any>{
    return this.http.put<Task>(`${this.apiurl}/${task.id}`,task,httpOptions);
  }
  add(task :Task):Observable<Task>{
    return this.http.post<Task>(this.apiurl,task);
  }
}
