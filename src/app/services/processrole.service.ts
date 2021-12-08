import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessroleService {
  URL : string = "https://192.168.0.9:8082/"; 

  constructor(private http: HttpClient) { }

 
  gettreeRoles():Observable<any> {
    return this.http.get<any>(this.URL+'PD/api/Roles');
    }

  getMembers(RoleId:number):Observable<any> {
    return this.http.get<any>(this.URL+'PD/api/Roles/Members?RoleId='+RoleId); //2960
    }
}
