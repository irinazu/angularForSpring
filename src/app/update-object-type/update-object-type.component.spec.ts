import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateObjectTypeComponent } from './update-object-type.component';

describe('UpdateObjectTypeComponent', () => {
  let component: UpdateObjectTypeComponent;
  let fixture: ComponentFixture<UpdateObjectTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateObjectTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateObjectTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
