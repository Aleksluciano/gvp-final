import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddAccommodationComponent } from "./add-accommodation/add-accommodation.component";


const routes: Routes = [
  { path: "", component: AddAccommodationComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AccommodationsRoutingModule {}
