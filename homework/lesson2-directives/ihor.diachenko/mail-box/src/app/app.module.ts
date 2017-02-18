import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { TimeAgoPipe } from './mail-box/time-ago.pipe';
import { SearchPipe } from './mail-box/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    TimeAgoPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
