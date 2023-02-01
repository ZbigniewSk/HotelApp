import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomsListComponent } from './components/rooms/rooms-list/rooms-list.component';
import { AddRoomComponent } from './components/rooms/add-room/add-room.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, RoomsComponent, RoomsListComponent, AddRoomComponent, HeaderComponent, MainComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
