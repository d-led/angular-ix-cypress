import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IxModule } from '@siemens/ix-angular';
import { AppComponent } from './app.component';
import { SomeComponentComponent } from './some-component/some-component.component';
import { SomeOtherComponentComponent } from './some-other-component/some-other-component.component';

@NgModule({
  declarations: [AppComponent, SomeComponentComponent, SomeOtherComponentComponent],
  imports: [
    BrowserModule,
    IxModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
