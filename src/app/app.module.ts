import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './home/components/table/table.component';
import { SearchInputComponent } from './home/components/search-input/search-input.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './home/components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    SearchInputComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
