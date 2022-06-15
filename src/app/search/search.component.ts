import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjectCService } from '../service/object-c.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  name:string="";
  sername:string="";
  email:string="";
  list:string[]=[];
  error:string="";

  constructor(private objectCService:ObjectCService,private router: Router
    ,private loc:Location) {

  }

  onSubmit(){
    if((this.name.length!=0&&this.sername.length!=0)||this.email.length!=0){
      this.list.push(this.name);
      this.list.push(this.sername);
      this.list.push(this.email);
  
      this.objectCService.searchCustomer(this.list).subscribe(data=>{
        if(data!=null){
          this.router.navigate(['/detailsOfObject', data.id]);
        }else{
          this.error="Customer does not exist"
        }
      });
    }else{
      this.error="Fill fields";
    }
    this.list.length=0;
  }
  goBack(){
    this.loc.back();
  }
}
