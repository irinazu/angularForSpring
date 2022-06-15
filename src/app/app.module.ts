import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import{TreeNestedOverviewExample} from './tree-data/tree-nested-overview-example';
import { AttributeComponent } from './attribute/attributeO.component';
import { CreateObjectTypeComponent } from './create-object-type/create-object-type.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CreateAttributeComponent } from './create-attribute/create-attribute.component';
import { UpdateObjectTypeComponent } from './update-object-type/update-object-type.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ObjectDetailsComponent } from './object-details/object-details.component';
import { UpdateObjectComponent } from './update-object/update-object.component';
import { ListAttributesComponent } from './list-attributes/list-attributes.component';
import { UpdateAttributeComponent } from './update-attribute/update-attribute.component';
import { SearchComponent } from './search/search.component';
import { BillingAccountComponent } from './billing-account/billing-account.component';
import { CreateBillingAccountComponent } from './create-billing-account/create-billing-account.component';
import { ListBillingAccountsComponent } from './list-billing-accounts/list-billing-accounts.component';
import { UpdateBillingAccountsComponent } from './update-billing-accounts/update-billing-accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeNestedOverviewExample,
    AttributeComponent,
    CreateObjectTypeComponent,
    CreateAttributeComponent,
    UpdateObjectTypeComponent,
    CreateCustomerComponent,
    ObjectDetailsComponent,
    UpdateObjectComponent,
    ListAttributesComponent,
    UpdateAttributeComponent,
    SearchComponent,
    BillingAccountComponent,
    CreateBillingAccountComponent,
    ListBillingAccountsComponent,
    UpdateBillingAccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTreeModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
