import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Primeng
import {TableModule} from 'primeng-lts/table';
import {MenubarModule} from 'primeng-lts/menubar';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ContractsComponent } from './components/contracts/contracts.component';
import { TabMenuModule } from 'primeng-lts/tabmenu';
import { SidebarModule } from 'primeng-lts/sidebar';
import { CardModule } from 'primeng-lts/card';
import { ContractorCardComponent } from './components/contractor-card/contractor-card.component';
import {DropdownModule} from 'primeng-lts/dropdown';
import {CalendarModule} from 'primeng-lts/calendar';
import {InputTextModule} from 'primeng-lts/inputtext';
import {ButtonModule} from 'primeng-lts/button';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import {OverlayPanelModule} from 'primeng-lts/overlaypanel';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ContractsComponent,
    ContractorCardComponent,
    WelcomeBannerComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    MenubarModule,
    TabMenuModule,
    SidebarModule,
    CardModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    ButtonModule,
    OverlayPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
