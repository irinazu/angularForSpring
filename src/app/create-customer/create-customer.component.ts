import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attribute } from '../attribute';
import { Customer } from '../customer';
import { ObjectC } from '../object-c';
import { ObjectType } from '../object-type';
import {Parameter} from '../parameter'
import { ObjectCService } from '../service/object-c.service';
import { ObjectTypeServiceService } from '../service/object-type-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent{
  ot:ObjectType=new ObjectType();
  atttr:Attribute[]=[]; 
  customer:Customer=new Customer();
  objectC:ObjectC=new ObjectC();
  s:Parameter=new Parameter("","");
  error:string="";
  
  
  parametersForSave:Parameter[]=[];
  constructor(private serviceObjectType:ObjectTypeServiceService,private route: ActivatedRoute,private service:ObjectCService,private router:Router,private loc:Location) { 
      this.serviceObjectType.getObjectTypeAttributes(this.route.snapshot.params['id'])
      .subscribe(data=>{
        for (let atr of data) {
          this.s=new Parameter("","");
          this.s.attribute=atr;
          this.parametersForSave.push(this.s);
        }
        this.objectC.parameters=this.parametersForSave;
      });
    }
  
  onSubmit(){
    this.objectC.idOfType=this.route.snapshot.params['id'];
    this.service.createObjectCutomer(this.objectC).subscribe(data=>{
      if(data==null){
        this.error="Customer with this email already exist";
      }else{
        this.router.navigate(['/']);
      }
    });
  }
  goBack(){
    this.loc.back();
  }
}
