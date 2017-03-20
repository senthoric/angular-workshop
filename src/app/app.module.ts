import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ShoutPipe } from './shared/shout.pipe';
import { TooltipDirective } from './shared/tooltip.directive';
import { HomeComponent } from './home/home.component';
import { PreloadAfter3Sec } from "./shared/custom.preloading.strategy";
import { AppNavComponent } from './app-nav/app-nav.component';
import { DynamicComponentsComponent } from './dynamic-components/dynamic-components.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { FooComponent } from './foo/foo.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoutPipe,
    TooltipDirective,
    HomeComponent,
    AppNavComponent,
    DynamicComponentsComponent,
    ChildCompComponent,
    FooComponent
  ],
  entryComponents: [ChildCompComponent, FooComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [PreloadAfter3Sec],
  bootstrap: [AppComponent]
})
export class AppModule { }
