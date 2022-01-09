import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './mycomponent/firstcomponent/firstcomponent.component';
import { SecondcomponentComponent } from './mycomponent/secondcomponent/secondcomponent.component';
import { ThirdcomponentComponent } from './mycomponent/thirdcomponent/thirdcomponent.component';
import { FooterComponent } from './mycomponent/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    SecondcomponentComponent,
    ThirdcomponentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
