import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAttributeComponent } from './create-attribute/create-attribute.component';
import { CreateBillingAccountComponent } from './create-billing-account/create-billing-account.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateObjectTypeComponent } from './create-object-type/create-object-type.component';
import { ObjectDetailsComponent } from './object-details/object-details.component';
import { SearchComponent } from './search/search.component';
import { TreeNestedOverviewExample } from './tree-data/tree-nested-overview-example';
import { UpdateAttributeComponent } from './update-attribute/update-attribute.component';
import { UpdateBillingAccountsComponent } from './update-billing-accounts/update-billing-accounts.component';
import { UpdateObjectTypeComponent } from './update-object-type/update-object-type.component';
import { UpdateObjectComponent } from './update-object/update-object.component';

const routes: Routes = [
  {path: '',component:TreeNestedOverviewExample},
  {path: 'detailsOfObject/:id',component:ObjectDetailsComponent},
  {path: 'searchObject',component:SearchComponent},
  /*{path: '',redirectTo: 'objects',pathMatch: 'full'},
  {path: 'update-object/:id',component:UpdateObjectComponent}*/
  {path: 'createObjectType',component:CreateObjectTypeComponent},
  {path: 'createAttribute',component:CreateAttributeComponent},
  {path: 'updateObjectType/:id',component:UpdateObjectTypeComponent},
  {path: 'createObject/:id',component:CreateCustomerComponent},
  {path: 'updateObject/:id',component:UpdateObjectComponent},
  {path: 'detailsOfObject/:id/createBillingAccount/:id',component:CreateBillingAccountComponent, pathMatch: 'full'},
  {path: 'detailsOfObject/:id/updateBillingAccount/:id',component:UpdateBillingAccountsComponent, pathMatch: 'full'},
  {path: 'updateAttribute/:id',component:UpdateAttributeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
