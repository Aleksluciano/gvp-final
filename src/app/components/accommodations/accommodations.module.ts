import { NgxViacepModule } from '@brunoc/ngx-viacep';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddAccommodationComponent } from "./add-accommodation/add-accommodation.component";
import { FilterModule } from 'src/app/pipes/filter.module';
import { AccommodationsRoutingModule } from './accommodations-routing.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AddAccommodationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccommodationsRoutingModule,
    FilterModule,
    NgxViacepModule,
    NgxMaskModule.forRoot()
  ]
})
export class AccommodationsModule { }
