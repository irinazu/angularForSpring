import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attribute } from '../attribute';
import { ObjectC } from '../object-c';
import { ObjectType } from '../object-type';
import { Parameter } from '../parameter';
import { ObjectCService } from '../service/object-c.service';
import { ObjectTypeServiceService } from '../service/object-type-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-billing-account',
  templateUrl: './create-billing-account.component.html',
  styleUrls: ['./create-billing-account.component.css']
})
export class CreateBillingAccountComponent{
  ot:ObjectType=new ObjectType();
  atttr:Attribute[]=[]; 
  objectC:ObjectC=new ObjectC();
  s:Parameter=new Parameter("","");

  parametersForSave:Parameter[]=[];
  constructor(private serviceObjectType:ObjectTypeServiceService,private route: ActivatedRoute,private service:ObjectCService,private router:Router,private loc:Location) { 
      this.serviceObjectType.getObjectTypeAttributes(19)
      .subscribe(data=>{
        for (let atr of data) {
          this.s=new Parameter("","");
          this.s.attribute=atr;
          this.parametersForSave.push(this.s);
        }
        this.objectC.parameters=this.parametersForSave;
        this.objectC.parent_id=this.route.snapshot.params['id'];
      });
    }
  
  onSubmit(){
    this.objectC.idOfType=19;
    this.service.createObjectCutomer(this.objectC).subscribe();
    this.loc.back();      
  }
  goBack(){
    this.loc.back();
  }


}
