import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HomeRoutingModule } from './home-routing.module';

import {
  NavibarComponent,
  HeaderComponent,
  FooterComponent,
} from '@app/modules/home/components';

import {
  MainComponent,
} from '@app/modules/home/pages';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackgroundComponent } from './pages/background/background.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { PortfolioBodyComponent } from './pages/portfolio-body/portfolio-body.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot({
      // loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
  ],
  declarations: [
    MainComponent,
    NavibarComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    BackgroundComponent,
    PortfolioComponent,
    TimelineComponent,
    PortfolioBodyComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NavibarComponent,
    PortfolioBodyComponent,
  ]
})
export class HomeModule { }
