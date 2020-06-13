import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Storage } from 'src/app/storage.model';
import { Router } from '@angular/router';
// import { AddAddressComponent } from './add-address/add-address.component';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  //To transfer data between 
  //'/retrieve' and '/add' component
  address : any = new Storage('', '', '', '', '', '', '', '', '', '', '');

  constructor(private firestore: AngularFirestore, private router : Router) { }

  //Adds a new address
  createAddress(storage : Storage){
    return this.firestore.collection('address').add(storage);
  }

  //Returns list of all available 
  //addresses in the database
  getAddress() {
    return this.firestore.collection('address').snapshotChanges();
  }

  //deletes the address with selected
  //id from the database
  deleteAddress(id : string) {
    this.firestore.doc('address/' + id).delete();
  }

}
