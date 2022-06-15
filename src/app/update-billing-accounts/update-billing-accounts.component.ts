import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjectC } from '../object-c';
import { Parameter } from '../parameter';
import { ObjectCService } from '../service/object-c.service';
import { ObjectTypeServiceService } from '../service/object-type-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-billing-accounts',
  templateUrl: './update-billing-accounts.component.html',
  styleUrls: ['./update-billing-accounts.component.css']
})
export class UpdateBillingAccountsComponent{

  objectC:ObjectC=new ObjectC();
  s:Parameter=new Parameter("","");
  parametersForSave:Parameter[]=[];
  constructor(private serviceObjectType:ObjectTypeServiceService,private route: ActivatedRoute,private service:ObjectCService,
    private router:Router,private loc:Location) { 
 
    this.service.getObject(this.route.snapshot.params['id'])
      .subscribe(data=>{
       this.objectC=data;
      });
    }
    onSubmit(){
      this.service.updateObjectCutomer(this.objectC).subscribe();
      this.loc.back();      
    }
    goBack(){
      this.loc.back();
    }

}
