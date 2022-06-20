import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './components/modal/modal.component';
import { ModalDetailComponent } from './components/modal-detail/modal-detail.component';
import { ItemsTableComponent } from './components/items-table/items-table.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, ModalComponent, ModalDetailComponent, ItemsTableComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule,MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
