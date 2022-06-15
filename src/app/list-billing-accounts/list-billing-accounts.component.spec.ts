import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBillingAccountsComponent } from './list-billing-accounts.component';

describe('ListBillingAccountsComponent', () => {
  let component: ListBillingAccountsComponent;
  let fixture: ComponentFixture<ListBillingAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBillingAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBillingAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
