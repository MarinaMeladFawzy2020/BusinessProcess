import { Component, Input, OnInit } from '@angular/core';
import { Processsrole } from 'src/app/interfaces/processsrole';
import { ProcessroleService } from 'src/app/services/processrole.service';
declare var $: any
declare var bootbox:any;

@Component({
  selector: 'app-addprocessrole',
  templateUrl: './addprocessrole.component.html',
  styleUrls: ['./addprocessrole.component.css']
})
export class AddprocessroleComponent implements OnInit {

 [x:string]:any;
 @Input() RoleRow!: Processsrole;

 sendRowTree(_r:any){
   this.RoleRow = _r;
   this.PARENT_ROLE_ID = this.RoleRow.ROLE_ID ;
   console.log( this.PARENT_ROLE_ID);
 }

 checkParentorChild(){
   // Parent 
   if(this.PARENT_ROLE_ID == undefined){
    this.title ="Add Process Role Parent"
   }else{
     //child
     this.title ="Add Process Role child"
   }

 }
  constructor(private processRole : ProcessroleService ) {}

  ngOnInit(): void {
    this.LAST_MODIFIED_BY = sessionStorage.getItem("username");
  }


  onClickSubmit(_f:any){
    console.log(_f);
    this.processRole.AddRoles(_f).subscribe(
      Response=> {
        console.log(Response);
        if(Response == "1"){
          bootbox.alert({
                  title: "<span style='font-weight: 400; font-size: 16px;'>"+"  Success"+"</span>  </i>",
                  message: "<span style='font-weight: 400; font-size: 16px;'>"+"  Success "+"</span>  </i>",
                  callback: function(){ 
                    window.location.reload();
                  }
              });
              $('#ProcessRole').modal('hide');
            }
          
            if(Response == "-1"){
              bootbox.alert({
                      title: "<span style='font-weight: 400; font-size: 16px; color:#a33'>"+"Role Name must unique "+"</span>  </i>",
                      message: "<span style='font-weight: 400; font-size: 16px; color:#a33'>"+"Role Name must unique "+"</span>  </i>",
                      callback: function(){ 
                      }
                  });
                }
      });

  }
 


}



