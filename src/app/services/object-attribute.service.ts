import { Injectable } from '@angular/core';
import { ObjectAttribute } from 'src/app/interfaces/ObjectAttribute';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ObjectAttributeService {


  private apiServerUrl ="https://192.168.0.9:8082";

  constructor(private http: HttpClient){}
 
  public getAttributeObjForBo(Obj_id:number): Observable<ObjectAttribute[]> {
  //  PD/api/BO/1680/Attributes   PD/api/BO/1680/Attributes
      return this.http.get<ObjectAttribute[]>(`${this.apiServerUrl}/PD/api/BO/${Obj_id}/Attributes`);
  } 

  public getAttributeObjForDo(DO_id:number): Observable<ObjectAttribute[]> {
    //  PD/api/BO/1680/Attributes   PD/api/BO/1680/Attributes
        return this.http.get<ObjectAttribute[]>(`${this.apiServerUrl}/PD/api/BO/DataObject/${DO_id}`);
    } 

    public deleteAtt(Att_id: number) :Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/PD/api/BO/Attributes/${Att_id}`);
    }

 
}
