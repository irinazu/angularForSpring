import { Component, OnInit } from '@angular/core';
import { ObjectType } from '../object-type';
import { HttpClient} from '@angular/common/http';
import { Attribute } from '../attribute';
import { ObjectTypeServiceService } from '../service/object-type-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-object-type',
  templateUrl: './create-object-type.component.html',
  styleUrls: ['./create-object-type.component.css']
})
export class CreateObjectTypeComponent implements OnInit {
  checked: Attribute[]=[];
  arr:Attribute[]=[];
  ot:ObjectType=new ObjectType();
  ots:ObjectType[]=[];
  attrs:Attribute[]=[];
  constructor(private httpClient:HttpClient,private otss:ObjectTypeServiceService,private router:Router,private loc:Location) { 
    httpClient.get<ObjectType[]>(`${this.baseURL}/types`).subscribe(x =>this.ots = x );
    httpClient.get<Attribute[]>(`${this.baseURL}/attributes`).subscribe(x =>this.attrs = x );
    
  }

  //private baseURL:string='http://localhost:8080/api';
  private baseURL:string='https://base-microservice.herokuapp.com/api'
  ngOnInit(): void {
  }

  onSubmit(){
    this.arr=[]
    this.arr.length=0;
    this.checked.forEach((currentValue, index) => {
      this.arr.push(currentValue);
    });
    this.ot.attributes=this.arr;
    //this.ot.attributes.forEach(x=>x.)
    console.log(this.ot);
    this.otss.getCreateOT(this.ot).subscribe(data=>console.log(data));
    this.router.navigate(['/']);
  }

  changeAttribute(id:number) {
      this.attrs.forEach(chk => {
        if (chk.id === id) {
          chk.checked = !chk.checked;
          this.getCheckbox();
        }
      });
   }

   getCheckbox() {
    this.checked = this.attrs.filter(i => i.checked == true);
   }
   goBack(){
    this.loc.back();
  }
  
}
