export class Attribute {
    id:number=-1;
    checked:boolean=false;
    name:string="";
    typeOfAttribute: null | undefined;
    /*constructor(name:string){
        this.name=name;
    }*/
}
export class TypeOfAttribute{
    id:number=-1;
    name:string="";
    constructor(id:number,name:string){
        this.name=name;
        this.id=id;

    }
}