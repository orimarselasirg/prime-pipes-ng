import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPAgeComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonsPageComponent } from './pages/uncommons-page/uncommons-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToogleCasePipe } from './pipes/toogle-case.pipe';
import { BooleanParser } from './pipes/boolean-translate.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicsPAgeComponent,
    NumbersPageComponent,
    UncommonsPageComponent,
    OrderComponent,
    ToogleCasePipe,
    BooleanParser,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
