import { Component, Input, OnInit } from '@angular/core';
import { Processsrole } from 'src/app/interfaces/processsrole';
import { ProcessroleService } from 'src/app/services/processrole.service';
declare var $: any
declare var bootbox:any;
@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {
  [x:string]:any; 

  sendMembers(AllMembersSelected:any , RoleID:any){
    console.log(AllMembersSelected);  
    console.log(RoleID);  
    this.roleID = RoleID;
    this.selectedProducts = AllMembersSelected ;
  }

  constructor(private processRole : ProcessroleService ) { 
  }

  getAllMember(){
    console.log(this.roleID);  
    this.processRole.getAllMembers(this.roleID).subscribe(customers => {
    this.customers = customers;
    this.cs = this.customers;
    this.loading = false;
    console.log(this.customers);
  });

  }

  ngOnInit(): void {

  //   this.selectedProducts= [
  //     {
  //       "MEMBER_ID": 320,
  //       "MEMBER_NAME": "root",
  //       "MEMBER_TYPE": "HUMAN",
  //       "ASSIGNED": 0 
  //   },
  //     {
  //         "MEMBER_ID": 2789,
  //         "MEMBER_NAME": "soha",
  //         "MEMBER_TYPE": "HUMAN",
  //         "ASSIGNED": 1
  //     }
  // ]
  
      this.statuses = [
      {label: 'HUMAN', value: 'HUMAN'},
      {label: 'ORGANIZATIONAL_UNIT', value: 'ORGANIZATIONAL_UNIT'},
      {label: 'RESOURCE_SET', value: 'RESOURCE_SET'},
      {label: 'ROLE', value: 'ROLE'},
  ]
  
 
  }

  selectRow(AddMem:any){
    console.log(AddMem);
    console.log(this.selectedProducts);
  }

  SubmitAddMembers(_M:any){
    var add = {
      RoleId : 	this.roleID ,
      members : this.selectedProducts
    }
  console.log(add);
  this.processRole.AddMembers(add).subscribe(
    Response=> {
      console.log(Response);
      if(Response == null){
        bootbox.alert({	
                title: "<span style='font-weight: 400; font-size: 16px;'>"+" Transaction done successfully."+"</span>  </i>",
                message: "<span style='font-weight: 400; font-size: 16px;'>"+" Transaction done successfully."+"</span>  </i>",
                callback: function(){ 
                  window.location.reload();
                }
            });
            $('#MemberProcessRole').modal('hide');
          }
        
          // if(Response == "-1"){
          //   bootbox.alert({
          //           title: "<span style='font-weight: 400; font-size: 16px; color:#a33'>"+"Role Name must unique "+"</span>  </i>",
          //           message: "<span style='font-weight: 400; font-size: 16px; color:#a33'>"+"Role Name must unique "+"</span>  </i>",
          //           callback: function(){ 
          //           }
          //       });
          //     }
    });

  }

}







