import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attribute } from '../attribute';
import { AttributeService } from '../service/attribute.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-attribute',
  templateUrl: './update-attribute.component.html',
  styleUrls: ['./update-attribute.component.css']
})
export class UpdateAttributeComponent {

  attribute:Attribute=new Attribute();

  constructor(private service:AttributeService,private route: ActivatedRoute,private router:Router,private loc:Location) { 
    service.getAttributeById(this.route.snapshot.params['id']).subscribe(data=>this.attribute=data);
  }

  onSubmit(){
    this.service.updateAttribute(this.route.snapshot.params['id'],this.attribute).subscribe();
    this.router.navigate(['/']);
    location.reload();
  }
  goBack(){
    this.loc.back();
  }
}
