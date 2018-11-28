import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from 'src/app/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from 'src/app/better-highlight/better-highlight.directive';
import { SuperHighlightDirective } from './super-highlight/super-highlight.directive';
import { UltraHighlightDirective } from './ultra-highlight/ultra-highlight.directive';
import { UnlessDirective } from './unless/unless.directive';
@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    SuperHighlightDirective,
    UltraHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
