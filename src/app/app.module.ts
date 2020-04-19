import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './09-dependency-injection/login/login.component';
import { CustomDirectiveComponent } from './10-directive-testing/custom-directive/custom-directive.component';
// import { ProductListComponent } from './08-asynctesting/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    LoginComponent,
    CustomDirectiveComponent,
    // ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
