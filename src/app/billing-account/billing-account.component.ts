import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjectC } from '../object-c';
import { Parameter } from '../parameter';
import { ObjectCService } from '../service/object-c.service';

@Component({
  selector: 'app-billing-account',
  templateUrl: './billing-account.component.html',
  styleUrls: ['./billing-account.component.css']
})
export class BillingAccountComponent implements OnInit{
  accounts:ObjectC[]=[];
  id:number=0;
  arr:Parameter[]=[];
  constructor(private route: ActivatedRoute,private service:ObjectCService,private router:Router) { 
    this.id=this.route.snapshot.params['id'];
  } 
  ngOnInit(): void {
    this.service.getChildrenBillingAccount(this.route.snapshot.params['id']).subscribe(data=>{
      for(let i=0;i<data.length;i++){
        data[i].parameters.sort(function(a,b){
          return(a.id-b.id);
        });
      }
      this.accounts=data
    });
  }

  
}
