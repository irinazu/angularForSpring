import { Attribute } from "./attribute";

export class Parameter {
    id:number=0;
    name:string="";
    value:string="";
    date_value:string="";
    attribute: Attribute=new Attribute();
    constructor(name:string,value:string){
        this.name=name;
        this.value=value;
    }
}
