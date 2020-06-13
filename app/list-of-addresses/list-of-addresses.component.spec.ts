import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfAddressesComponent } from './list-of-addresses.component';

describe('ListOfAddressesComponent', () => {
  let component: ListOfAddressesComponent;
  let fixture: ComponentFixture<ListOfAddressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
