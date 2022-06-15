import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { ObjectC } from '../object-c';
import { CustomerService } from '../service/customer.service';
import { ObjectCService } from '../service/object-c.service';

@Component({
  selector: 'app-object-details',
  templateUrl: './object-details.component.html',
  styleUrls: ['./object-details.component.css']
})
export class ObjectDetailsComponent implements OnInit {

  objC:ObjectC=new ObjectC();

  constructor(private service:ObjectCService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.service.getObject(this.route.snapshot.params['id']).subscribe(res=>this.objC=res);
  }
  onUpdateObject(){
    this.router.navigate(['/updateObject', this.route.snapshot.params['id']]);
  }
}
