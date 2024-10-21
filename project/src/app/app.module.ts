import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtherPageComponent } from './modules/other-page/other-page.component';
import { SharedModule } from './shared/shared.module';
import { PostComponent } from './modules/posts/posts.component';
import { NoAccessComponent } from './modules/no-access/no-access.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherPageComponent,
    PostComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
