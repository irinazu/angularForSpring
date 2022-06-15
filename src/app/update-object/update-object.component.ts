import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjectC } from '../object-c';
import { Parameter } from '../parameter';
import { ObjectCService } from '../service/object-c.service';
import { ObjectTypeServiceService } from '../service/object-type-service.service';

@Component({
  selector: 'app-update-object',
  templateUrl: './update-object.component.html',
  styleUrls: ['./update-object.component.css']
})
export class UpdateObjectComponent{
  objectC:ObjectC=new ObjectC();
  s:Parameter=new Parameter("","");
  parametersForSave:Parameter[]=[];
  constructor(private serviceObjectType:ObjectTypeServiceService,private route: ActivatedRoute,private service:ObjectCService,private router:Router) { 
      this.service.getObject(this.route.snapshot.params['id'])
      .subscribe(data=>{
       this.objectC=data;
       console.log(data);
      });
    }
    onSubmit(){
      //this.objectC.idOfType=this.route.snapshot.params['id'];
      this.service.updateObjectCutomer(this.objectC).subscribe();
      this.router.navigate(['/']);
    }
}
