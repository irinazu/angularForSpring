import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBillingAccountsComponent } from './update-billing-accounts.component';

describe('UpdateBillingAccountsComponent', () => {
  let component: UpdateBillingAccountsComponent;
  let fixture: ComponentFixture<UpdateBillingAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBillingAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBillingAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
