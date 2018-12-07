import { NgxViacepModule } from '@brunoc/ngx-viacep';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddAssistantComponent } from "./add-assistant/add-assistant.component";
import { FilterModule } from 'src/app/pipes/filter.module';
import { AssistantsRoutingModule } from './assistants-routing.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AddAssistantComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AssistantsRoutingModule,
    FilterModule,
    NgxViacepModule,
    NgxMaskModule.forRoot(),
  ]
})
export class AssistantsModule { }
