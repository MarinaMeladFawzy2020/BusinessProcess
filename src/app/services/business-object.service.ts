import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BussinessObject } from '../interfaces/BussinessObject';

@Injectable({
  providedIn: 'root'
})
export class BusinessObjectService {
  //private apiServerUrl = environment.apiBaseUrl;

  private apiServerUrl ="https://192.168.0.9:8082";


  constructor(private http: HttpClient){}
 
  
  public addBusinessObject(obj: BussinessObject []): Observable<BussinessObject> {
    return this.http.post<BussinessObject>(`${this.apiServerUrl}/PD/api/BO`, obj);
  }
 

  getBusinessObj() {
    console.log("getbusinessobbject");
    return this.http.get<any>(`${this.apiServerUrl}/PD/api/BO`)
    .toPromise()
    .then(res => <BussinessObject[]>res)
    .then(data => { 
      console.log(data);

      return data;
    
    });
}
// delete Bo
public deleteBo(BO_id: number) :Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/PD/api/BO/${BO_id}`);
}
//delete DO
public deleteDo(Do_ID: number):Observable<void>{
  return this.http.delete<void>(`${this.apiServerUrl}/PD/api/BO/DataObject/${Do_ID}`);
}
// public getBusinessObj(): Observable<BussinessObject[]> {
//   //  PD/api/BO/1680/Attributes   PD/api/BO/1680/Attributes
//       return this.http.get<BussinessObject[]>(`${this.apiServerUrl}/PD/api/BO`);
//   } 

}
