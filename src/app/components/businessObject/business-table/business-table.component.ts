import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BussinessObject } from 'src/app/interfaces/BussinessObject';
import { Testproduct } from 'src/app/interfaces/testproduct';
import { BusinessObjectService } from 'src/app/services/business-object.service';
import { TestService } from 'src/app/services/test.service';
import { BusinessAttributeComponent } from '../business-attribute/business-attribute.component';

@Component({
  selector: 'app-business-table',
  templateUrl: './business-table.component.html',
  styleUrls: ['./business-table.component.css'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]

})

export class BusinessTableComponent implements OnInit {

  public selectedName: any;
  AllData: BussinessObject[] = [];
  @ViewChild(BusinessAttributeComponent)
  private businessAttributeComponent!: BusinessAttributeComponent;
  deleteBo: BussinessObject | undefined;
  constructor(private boService: BusinessObjectService) { }

  ngOnInit(): void {
    this.getBo();
  }
  // highight Bo
  public highlightBo(MainData: { bo_NAME: any; }) {
    this.selectedName = MainData.bo_NAME;
  }

// highight Bo
  public highlightDo(DetailsData: { do_NAME: any; }) {
    this.selectedName = DetailsData.do_NAME;
  }

    // show attribute inside business obj
  onRowBo(selectedData: any) {
    console.log('row', selectedData.bo_ID);
    this.businessAttributeComponent.getAttributeObj(selectedData.bo_ID);
    console.log(selectedData);

    return selectedData;
  }

  // show attribute inside data obj
  onRowDo(selectedData: any) {
    console.log('row', selectedData.do_ID);
    this.businessAttributeComponent.getAttributeObj(selectedData.do_ID);
    console.log(selectedData);
    return selectedData;
  }


  handleFilter(e: any,filteredRecordCount: any){
    console.log("filteredRecordCount");
 }


  // delete Bo from table
  public onDeleteBo(bo_ID: number): void {
    this.boService.deleteBo(bo_ID).subscribe(
      (response: void) => {
        console.log(response);
        this.getBo();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // delete Bo from table
  public onDeleteDo(Do_ID: number): void {
    this.boService.deleteDo(Do_ID).subscribe(
      (response: void) => {
        console.log(response);
        this.getBo();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  // get all business object with data obj inside
  public getBo() {
    this.boService.getBusinessObj().then(data => {
      console.log(data);
      this.AllData = data;
      console.log(this.AllData);

    })
  }

//   public onOpenModal(bo: BussinessObject, mode: string): void {
//     const container = document.getElementById('main-container');
//     const button = document.createElement('button');
//     button.type = 'button';
//     button.style.display = 'none';
//     button.setAttribute('data-toggle', 'modal');
   
//     if (mode === 'delete') {
//       this.deleteBo = bo;
//       button.setAttribute('data-target', '#deleteBoModal');
//     }
//     container?.appendChild(button);
//     button.click();
//   }

 }
