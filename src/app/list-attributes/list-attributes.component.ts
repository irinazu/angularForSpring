import { Component, OnInit } from '@angular/core';
import { Attribute } from '../attribute';
import { AttributeService } from '../service/attribute.service';

@Component({
  selector: 'app-list-attributes',
  templateUrl: './list-attributes.component.html',
  styleUrls: ['./list-attributes.component.css']
})
export class ListAttributesComponent implements OnInit {

  attributes:Attribute[]=[];

  constructor(private service:AttributeService) {
    service.getAllAttributes().subscribe(data=>this.attributes=data);
  }

  ngOnInit(): void {
  }
  onDeleteAttribute(id:number){
    this.service.deleteAttribute(id).subscribe();
    location.reload();
  }
}
