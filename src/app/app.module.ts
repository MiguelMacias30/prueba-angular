import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './common/left.component';
import { RightComponent } from './common/right.component';
import { LogoComponent } from './common/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
