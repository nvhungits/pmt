import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { DetailsComponent } from './products/details/details.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsComponent } from './news/news.component';
import { ViewNewsComponent } from './news/view-news/view-news.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "products/:category_id", component: ProductsComponent},
  { path: "products/:category_id/:subcategory_id", component: ProductsComponent},
  { path: "product/:id", component: DetailsComponent},
  { path: "cart", component: CartListComponent},
  { path: "recruitment", component: RecruitmentComponent},
  { path: "contact", component: ContactsComponent},
  { path: "news", component: NewsComponent},
  { path: "news/:id", component: ViewNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
