import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { SortingPanelComponent } from './components/sorting-panel/sorting-panel.component';
import { LogoComponent } from './components/logo/logo.component';
import { MenuSettingsComponent } from './components/menu-settings/menu-settings.component';
import { ColorDirective } from './components/card/directives/color.directive';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'details/:id', component: DetailsComponent }
];

@NgModule({
  declarations: [
    CardListComponent,
    CardComponent,
    SortingPanelComponent,
    LogoComponent,
    MenuSettingsComponent,
    ColorDirective,
    SortPipe,
    FilterPipe,
    NotFoundComponent,
    HomeComponent,
    DetailsComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CardListComponent,
    CardComponent,
    SortingPanelComponent,
    LogoComponent,
    MenuSettingsComponent,
    ColorDirective,
    SortPipe,
    FilterPipe
  ]
})
export class YoutubeModule { }
