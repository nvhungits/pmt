import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from  '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LivechatWidgetModule } from '@livechat/angular-widget';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { ProductSaleComponent } from './product-sale/product-sale.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './products/details/details.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsComponent } from './news/news.component';
import { ViewNewsComponent } from './news/view-news/view-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopbarComponent,
    SliderComponent,
    HomeComponent,
    ProductSaleComponent,
    ProductListComponent,
    FooterComponent,
    ProductsComponent,
    DetailsComponent,
    CartListComponent,
    RecruitmentComponent,
    ContactsComponent,
    NewsComponent,
    ViewNewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    LivechatWidgetModule
  ],
  providers: [
    {
      provide: LocationStrategy, 
      useClass: HashLocationStrategy,
    },
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
