import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxViacepModule } from '@brunoc/ngx-viacep';

import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterModule } from './../../pipes/filter.module';
import { UsersRoutingModule } from './users-routing.module';
import { NgxMaskInputModule } from 'ngx-mask-input';
import { NgxMaskModule } from 'ngx-mask';
import { MatProgressSpinnerModule } from '@angular/material';




@NgModule({
  declarations: [
    ListUsersComponent,
    AddUserComponent,
    EditUserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxViacepModule,
    RouterModule,
    FilterModule,
    UsersRoutingModule,
    NgxMaskModule.forRoot(),
    MatProgressSpinnerModule
  ]
})
export class UsersModule { }
