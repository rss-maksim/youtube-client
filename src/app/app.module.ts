import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SortingPanelComponent } from './components/sorting-panel/sorting-panel.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchBarComponent } from './components/header/components/search-bar/search-bar.component';
import { FilterButtonComponent } from './components/header/components/filter-button/filter-button.component';
import { MenuSettingsComponent } from './components/menu-settings/menu-settings.component';
import { CommonModule } from '@angular/common';
import { ColorDirective } from './components/card/directives/color.directive';
import { SortPipe } from './components/card-list/pipes/sort.pipe';
import { FilterPipe } from './components/card-list/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    SortingPanelComponent,
    LogoComponent,
    SearchBarComponent,
    FilterButtonComponent,
    MenuSettingsComponent,
    ColorDirective,
    SortPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
