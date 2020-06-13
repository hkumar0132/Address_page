import { Component, OnInit } from '@angular/core';
import { Storage } from 'src/app/storage.model';
import { StorageService } from 'src/app/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-addresses',
  templateUrl: './list-of-addresses.component.html',
  styleUrls: ['./list-of-addresses.component.css']
})
export class ListOfAddressesComponent implements OnInit {

  addresses : Storage[];

  constructor(private storageService : StorageService, private router : Router) { }

  ngOnInit(): void {

    //Getting list of addresses stored
    //in the database and storing them in
    //object 'addresses'
    this.storageService.getAddress().subscribe(data => {
      this.addresses = data.map(e => {
        return {
          uid : e.payload.doc.id,
          addressId : e.payload.doc.data() 
        } as Storage;
      })
    });

  }

  updateAddress(storage : Storage) {
    this.storageService.address = storage;
    this.router.navigate(['/add']);
  }

  deleteAddress(storage : Storage) {
    if(confirm('Are you sure you want to remove this address?'))
      this.storageService.deleteAddress(storage.uid);
  }

}
