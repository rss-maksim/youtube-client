import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { httpInterceptorsProviders } from './interceptors';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorsProviders]
})
export class SharedModule { }
