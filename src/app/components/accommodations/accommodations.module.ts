import { NgxViacepModule } from '@brunoc/ngx-viacep';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddAccommodationComponent } from "./add-accommodation/add-accommodation.component";
import { FilterModule } from 'src/app/pipes/filter.module';
import { AccommodationsRoutingModule } from './accommodations-routing.module';

@NgModule({
  declarations: [
    AddAccommodationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AccommodationsRoutingModule,
    FilterModule,
    NgxViacepModule
  ]
})
export class AccommodationsModule { }
