import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Attribute,TypeOfAttribute } from '../attribute';
import { AttributeService } from '../service/attribute.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-attribute',
  templateUrl: './create-attribute.component.html',
  styleUrls: ['./create-attribute.component.css']
})
export class CreateAttributeComponent{

  types:TypeOfAttribute[]=[];
  atr:Attribute=new Attribute();

  constructor(private atrs:AttributeService,private router:Router,private loc:Location) { 
    atrs.getTypesAttribute().subscribe(res=>this.types=res);
  }

  onSubmit(){
    this.atrs.createAttribute(this.atr).subscribe(z=>console.log(z));
    this.router.navigate(['/']);
  }
  goBack(){
    this.loc.back();
  }
}
