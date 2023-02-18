import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/main/login/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/main/register/register.component';
import { AddRoomComponent } from './components/rooms/add-room/add-room.component';
import { RoomsListComponent } from './components/rooms/rooms-list/rooms-list.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ButtonComponent } from './components/utils/button/button.component';

const appRoutes: Routes = [
  { path: '', component: RoomsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomsListComponent,
    AddRoomComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    ButtonComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
