import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAddressComponent } from './add-address/add-address.component';
import { ListOfAddressesComponent } from './list-of-addresses/list-of-addresses.component';


const routes: Routes = [

  { path : '', redirectTo : '/add', pathMatch : 'full' },
  { path : 'add', component :  AddAddressComponent},
  { path : 'retrieve', component : ListOfAddressesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
