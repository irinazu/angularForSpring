import { AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, Input, OnInit } from '@angular/core';
import { ObjectType } from '../object-type';
import { ObjectTypeServiceService } from '../service/object-type-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Attribute, TypeOfAttribute } from '../attribute';
import { HttpClient } from '@angular/common/http';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-object-type',
  templateUrl: './update-object-type.component.html',
  styleUrls: ['./update-object-type.component.css']
})
export class UpdateObjectTypeComponent implements OnInit{

  finisCheked:Attribute[]=[];
  checked: Attribute[]=[];
  newAtr: Attribute[]=[];
  arr:Attribute[]=[];
  id:number=-1;
  ot:ObjectType=new ObjectType();
  attrs:Attribute[]=[];
  ots:ObjectType[]=[];
  //s:TypeOfAttribute=new TypeOfAttribute();

  constructor(private httpClient:HttpClient,private serviceObjectType:ObjectTypeServiceService,private route: ActivatedRoute,private router:Router,private loc:Location) {
    this.serviceObjectType.getObjectTypeById(this.route.snapshot.params['id']).subscribe(data=>{
      this.ot=data;
      for(let a of data.attributes){
        a.checked=true;
      }
      this.checked=data.attributes;
      this.checked.forEach(x=>x.typeOfAttribute=null)

    });

    httpClient.get<ObjectType[]>(`${this.baseURL}/types`).subscribe(x =>{
      this.ots = x;
    });

    httpClient.get<Attribute[]>(`${this.baseURL}/attributes`).subscribe(x =>{
      this.newAtr = x;
      this.checked.forEach(x=>this.delete(x));
      this.attrs=this.newAtr;
      this.attrs.forEach(x=>x.typeOfAttribute=null)

    });
   }
 
  delete(attribute:Attribute):void{
    for(let a of this.newAtr){
      var myIndex = this.newAtr.indexOf(a);
      if(attribute.id==a.id){
        this.newAtr.splice(myIndex,1);
      }
    }
  }
  
  //private baseURL:string='http://localhost:8080/api';
  private baseURL:string='https://base-microservice.herokuapp.com/api';

  ngOnInit(): void {}

  onSubmit(){
    this.ot.attributes=this.finisCheked;
    //this.ot.attributes.forEach(x=>x.typeOfAttribute=new TypeOfAttribute(0,"lol"))
    console.log(this.ot);
    this.serviceObjectType.ubdateObjectType(this.ot).subscribe(data=>console.log(data));
    this.router.navigate(['/']);
  }

  changeAttribute(id:number) {
    //setTimeout(() => {
      this.attrs.forEach(chk => {
        if (chk.id == id) {
          chk.checked = !chk.checked;
          this.getCheckbox();
        }
      });
      this.checked.forEach(chk => {
        if (chk.id == id) {
          chk.checked = !chk.checked;
          this.getCheckbox();
        }
      });
    //}, 1000);
 }

 getCheckbox() {
    this.finisCheked = this.attrs.filter(i => i.checked == true).concat(this.checked.filter(i => i.checked == true));
    console.log(this.finisCheked);
 }

 changeObjectTypeParent(id:number){
   this.ot.parent_id=id;
 }
 goBack(){
  this.loc.back();
}
}
