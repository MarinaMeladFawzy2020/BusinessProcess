import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ObjectAttribute } from 'src/app/interfaces/ObjectAttribute';
import { ObjectAttributeService } from 'src/app/services/object-attribute.service';

@Component({
  selector: 'app-business-attribute',
  templateUrl: './business-attribute.component.html',
  styleUrls: ['./business-attribute.component.css']
})
export class BusinessAttributeComponent {
  panelOpenState = false;
  @Input() par: any;


  rowData: any = [];
  rowData1: any = [];
  objects: ObjectAttribute[] = [];

  constructor(private ObjectAttributeService: ObjectAttributeService) { }


  public selectedName: any;
  // highight Attributes
  public highlightAttObj(MainData: { att_NAME: any; }) {
    this.selectedName = MainData.att_NAME;
  }

  // get all attribute with object id
  getAttributeObj(Obj_id: number) {
    this.ObjectAttributeService.getAttributeObjForBo(Obj_id).subscribe(
      (response: ObjectAttribute[]) => {
        console.log(response);
        this.rowData = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
//delete Bo from table
public onDeleteAtt(Att_ID: number): void {
  this.ObjectAttributeService.deleteAtt(Att_ID).subscribe(
    (response: void) => {
      console.log(response);
      window.location.reload();
     // this.getBo();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

  public searchObjectByName(key: string): void {
    const results: ObjectAttribute[] = [];
    for (const obj of this.objects) {
      if (obj.att_NAME.toLowerCase().indexOf(key.toLowerCase()) !== -1)
        results.push(obj);
    }

    this.objects = results;

    if (results.length === 0 || !key)
      this.getAttributeObj(1680);
  }

  


}



function Obj_id(Obj_id: any) {
  throw new Error('Function not implemented.');
}

