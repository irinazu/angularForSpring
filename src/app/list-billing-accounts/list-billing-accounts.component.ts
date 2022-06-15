import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjectC } from '../object-c';
import { ObjectCService } from '../service/object-c.service';

@Component({
  selector: 'app-list-billing-accounts',
  templateUrl: './list-billing-accounts.component.html',
  styleUrls: ['./list-billing-accounts.component.css']
})
export class ListBillingAccountsComponent {
  accounts:ObjectC[]=[];
  constructor(private route: ActivatedRoute,private service:ObjectCService,private router:Router) { 
    service.getChildrenBillingAccount(this.route.snapshot.params['id']).subscribe(data=>this.accounts=data)
  }



}
