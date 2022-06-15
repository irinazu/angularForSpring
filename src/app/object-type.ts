import { Attribute } from "./attribute";

export class ObjectType {
    id:number=0;
    name: string='';
    parent_id:number=-1;
    attributes:Attribute[]=[];
    //checked:boolean=false;

}

