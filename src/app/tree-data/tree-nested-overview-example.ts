import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { ObjectTypeServiceService } from '../service/object-type-service.service';
import { Observable } from 'rxjs';
import EmployeesJson from './my.json';


import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { Attribute } from '../attribute';
import { AttributeComponent } from '../attribute/attributeO.component';
import { AttributeService } from '../service/attribute.service';
import { ObjectC } from '../object-c';
import { ObjectCService } from '../service/object-c.service';


interface EMPLOYEE {
  id:number;
  name: string;
  children?:EMPLOYEE[];
}

  interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
    id:number;
  }
  
  /**
   * @title Tree with flat nodes
   */
   @Component({
    selector: 'tree-nested-overview-example',
    templateUrl: 'tree-nested-overview-example.html',
    styleUrls: ['tree-nested-overview-example.css'],
  })
  export class TreeNestedOverviewExample{
    attributes:Attribute[]=[];
    objectsC:ObjectC[]=[];

    @HostListener('click', ['$event.target'])
    onClick(btn: EMPLOYEE) {
      //this.httpClient.get<Attribute[]>(`${this.baseURL}/attributes/${btn.id}`).subscribe(res=>console.log(res));
      this.httpClient.get<Attribute[]>(`${this.baseURL}/attributes/${btn.id}`).subscribe(res=>this.attributes=res);
    }

    private _transformer = (node: EMPLOYEE, level: number) => {
      return {
        expandable: !!node.children && node.children.length > 0,
        name: node.name,
        level: level,
        id:node.id
      };
    };
  
    treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level,
      node => node.expandable,
    );
  
    treeFlattener = new MatTreeFlattener(
      this._transformer,
      node => node.level,
      node => node.expandable,
      node => node.children,
    );
    
    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    //private baseURL:string='http://localhost:8080/api/types';
    private baseURL:string='https://base-microservice.herokuapp.com/api/types';

    constructor(private httpClient:HttpClient,private otss: ObjectTypeServiceService,
      private attributeService:AttributeService,private objectService:ObjectCService) {

      httpClient.get<EMPLOYEE[]>(this.baseURL).subscribe(x =>this.dataSource.data = x );
      objectService.getAllObjects().subscribe(res=>this.objectsC=res);
    }
         
    hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

    onDeleteObjectType(id:number){
      this.otss.deleteOT(id).subscribe();
      location.reload();
    }
    onDeleteAttribute(id:number){
      this.attributeService.deleteAttribute(id).subscribe();
      location.reload();
    }
    deleteObject(id:number){
      this.objectService.deleteObjectById(id).subscribe();
      //location.reload();
    }
  }