import { Component, Input, OnInit } from '@angular/core';
import { Processsrole } from 'src/app/interfaces/processsrole';
import { ProcessroleService } from 'src/app/services/processrole.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-processroledetails',
  templateUrl: './processroledetails.component.html',
  styleUrls: ['./processroledetails.component.css']
})
export class ProcessroledetailsComponent implements OnInit {
  [x:string]:any; 
  @Input() RoleRow!: Processsrole;
 
  constructor(private processRole : ProcessroleService , private customerService: TestService) {

  }
  
  sendRowTree(_r:any){
  //  console.log(_r);
   this.RoleRow = _r;
   this.ROLE_ID = this.RoleRow.ROLE_ID ;
   this.ROLE_NAME = this.RoleRow.ROLE_NAME ;
   this.DESCRIPTION = this.RoleRow.DESCRIPTION ;
 
   this.processRole.getMembers(this.ROLE_ID).subscribe(Members => {
    this.Members = Members;
    this.loading = false;
    // console.log(this.Members);
    this.Members.forEach(
      (Member: { date: string | number | Date; }) => {
        return (Member.date = new Date(Member.date));
      }
    );
  });

  }

  ngOnInit(): void {


 

  }
    
  }

  


