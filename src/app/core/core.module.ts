import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/header/components/search-bar/search-bar.component';
import { FilterButtonComponent } from './components/header/components/filter-button/filter-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { YoutubeModule } from '../youtube/youtube.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    FilterButtonComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    YoutubeModule
  ],
  exports: [
    HeaderComponent,
    SearchBarComponent,
    FilterButtonComponent,
    FooterComponent
  ]
})
export class CoreModule { }
