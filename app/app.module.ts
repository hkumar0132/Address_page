import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { ListOfAddressesComponent } from './list-of-addresses/list-of-addresses.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './storage.service';

@NgModule({
  declarations: [
    AppComponent,
    AddAddressComponent,
    ListOfAddressesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent, AddAddressComponent, ListOfAddressesComponent]
})

export class AppModule { 

}
