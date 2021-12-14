import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BussinessObject } from 'src/app/interfaces/BussinessObject';
import { BusinessObjectService } from 'src/app/services/business-object.service';

@Component({
  selector: 'app-add-business-object',
  templateUrl: './add-business-object.component.html',
  styleUrls: ['./add-business-object.component.css']
})
export class AddBusinessObjectComponent implements OnInit {
  AllData: BussinessObject[] | undefined;

  constructor(private boService: BusinessObjectService) { }

  ngOnInit(): void {
  }

  public onAddBusinessObj(addForm: NgForm): void {
    console.log(addForm.value);
    this.boService.addBusinessObject(addForm.value).subscribe(
      (response: BussinessObject) => {
        console.log(response);
        this.getBo();
        document.getElementById("add-obj-form")?.click();
        addForm.reset();
        location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }




  public getBo() {
    this.boService.getBusinessObj().then(data => {
      console.log(data);
      this.AllData = data;
      console.log(this.AllData);

    })
  }


}
