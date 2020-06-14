import { Component, OnInit } from '@angular/core';
import { Storage } from 'src/app/storage.model';
import { StorageService } from 'src/app/storage.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
/*
    uid : string;
    addressId : string;
    country : string;
    name : string;
    phone : number;
    PIN : number;
    flat : string;
    area : string;
    landmark : string;
    town : string;
    state : string;
*/ 

export class AddAddressComponent implements OnInit {

  address : Storage = {   'uid' : '1' ,
                      'addressId' : '',
                      'country' : '', 
                      'name' : '',
                      'phone' : '',
                      'PIN' : '',
                      'flat' : '',
                      'area' : '',
                      'landmark' : '',
                      'town' : '',
                      'state' : '' };

  constructor(private storageService : StorageService, private router : Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
      //Copying data from storageService 
      //to set in the form when user wants to update
      //any address
      if(this.storageService.address && this.storageService.address.addressId) 
        this.address = this.storageService.address.addressId;
  }

  /*This function is called when PIN has
  been entered by the user. It finds country
  and state name based on the PIN code.*/
  checkCountryAndState() {

    if(this.address.PIN.length == 6) {
      this.httpClient.get("https://cors-anywhere.herokuapp.com/http://postalpincode.in/api/pincode/" + this.address.PIN).
        subscribe((data) => {
            if(data && data['PostOffice'] && data['PostOffice'][0]) {
              this.address.country = data["PostOffice"][0]["Country"];
              this.address.state = data["PostOffice"][0]["State"];
            }
        });
    }

  }

  onSubmit() {

      if(!this.address.country || !this.address.name || 
        !this.address.phone || !this.address.PIN || !this.address.flat || !this.address.area ||
        !this.address.town || !this.address.state)
          alert('Please fill all the required fields correctly!');

      else {

          this.storageService.createAddress({...this.address});

          if(this.storageService.address == {})
            alert('New address successfully added!');
          else
            alert('Address updated succesfully');

          //Navigating to the '/retrieve' route
          //to show the list of addresses after
          //a new address has been added
          this.router.navigate(['/retrieve']);

      }

      //This will execute only when user is updating
      //any address
      if(this.storageService.address) 
        this.storageService.deleteAddress(this.storageService.address.uid);
      
      this.storageService.address = {};
  }

}
