import { Component, OnInit } from '@angular/core';
import { ProcessroleService } from 'src/app/services/processrole.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {
  [x:string]:any; 
  selectedItems: any = [];

  constructor(private processRole : ProcessroleService , private customerService: TestService) { }

  ngOnInit(): void {


  
  this.processRole.getAllMembers().subscribe(customers => {
    this.customers = customers;
    this.loading = false;
    console.log(this.customers);
    this.customers.forEach(
      (      customer: { date: string | number | Date; }) => (customer.date = new Date(customer.date))
    );
  });

      this.statuses = [
      {label: 'HUMAN', value: 'HUMAN'},
      {label: 'Organizational Unit', value: '1'},
      {label: 'RESOURCE SET', value: '2'},
      {label: 'Role', value: '3'},
      {label: 'User', value: '4'}
  ]
  
 
  }

  selectedRows: any[] = [];
  selectRow(checkValue: any) {
    console.log(checkValue);
    this.selectedRows = checkValue;

  }


}







