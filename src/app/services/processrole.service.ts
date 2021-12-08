import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessroleService {
  URL : string = "https://192.168.0.9:8082/"; 

  constructor(private http: HttpClient) { }

 
  getAllMembers():Observable<any> {
    return this.http.get<any>(this.URL+'PD/api/Roles/Members?RoleId=2960');  //AllMembers
    }

   gettreeRoles():Observable<any> {
    return this.http.get<any>(this.URL+'PD/api/Roles');
    }

   AddRoles(_roles:any):Observable<any> {
    return this.http.post<any>(this.URL+'PD/api/Roles' , _roles);
    }
    
   getMembers(RoleId:number):Observable<any> {
    return this.http.get<any>(this.URL+'PD/api/Roles/Members?RoleId='+RoleId); //2960
    }

   AddMembers(_Members:any):Observable<any> {
    return this.http.post<any>(this.URL+'PD/api/Roles/Members' , _Members);
    }
}
