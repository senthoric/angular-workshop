import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ShoutPipe } from './shared/shout.pipe';
import { TooltipDirective } from './shared/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShoutPipe,
    TooltipDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
