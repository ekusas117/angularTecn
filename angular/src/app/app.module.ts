import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CssComponent } from './css/css.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SelectorsComponent } from './selectors/selectors.component';
import { SelectorDetailComponent } from './selector-detail/selector-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { ReactComponent } from './react/react.component';
import { JscriptComponent } from './jscript/jscript.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CssComponent,
    MainPageComponent,
    SelectorsComponent,
    SelectorDetailComponent,
    ReactComponent,
    JscriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,
    MatSlideToggleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
