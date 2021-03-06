import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'primeng/slider';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { registerLocaleData, DatePipe } from '@angular/common';
import localeFr from '@angular/common/locales/fr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { CreateDaybookComponent } from './Pages/create-daybook/create-daybook.component';
import { ValidDaybookComponent } from './Pages/valid-daybook/valid-daybook.component';
import { EndDaybookComponent } from './Pages/end-daybook/end-daybook.component';
import { NavbarComponent } from './CommonComponent/navbar/navbar.component';
import { FooterComponent } from './CommonComponent/footer/footer.component';
import { DiagramComponent } from './Pages/dashboard/components/diagram/diagram.component';
import { HistoriqueComponent } from './Pages/dashboard/components/historique/historique.component';
import { CalendarComponent } from './Pages/dashboard/components/calendar/calendar.component';

import { TokenInterceptor } from './shared/tokenInterceptor';

import { DetailsViewComponent } from './Pages/dashboard/components/details-view/details-view.component';

registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CreateDaybookComponent,
    ValidDaybookComponent,
    EndDaybookComponent,
    NavbarComponent,
    FooterComponent,
    DiagramComponent,
    HistoriqueComponent,
    CalendarComponent,
    DetailsViewComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AccordionModule,
    NgxChartsModule,
    ButtonModule,
    SliderModule,
    MenuModule,
    DropdownModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    HttpClientModule,
    CarouselModule,
    ConfirmDialogModule,
    CheckboxModule,

  ],
  providers: [ConfirmationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
