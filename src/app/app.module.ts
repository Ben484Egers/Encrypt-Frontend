import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { AddMessageComponent } from './component/add-message/add-message.component';
import { CryptButtonComponent } from './component/crypt-button/crypt-button.component';
import { TextAreaComponent } from './component/text-area/text-area.component';
import { FindMessageComponent } from './component/find-message/find-message.component';
import { IntroCardsComponent } from './component/intro-cards/intro-cards.component';
import { DisclaimerOptionsComponent } from './component/disclaimer-options/disclaimer-options.component';
import { KeyOptionsComponent } from './component/key-options/key-options.component';
import { MessageViewComponent } from './component/message-view/message-view.component';
import { SearchMessageComponent } from './component/search-message/search-message.component';
import { SafeInfoComponent } from './component/safe-info/safe-info.component';
import { HomeComponent } from './component/home/home.component';
import { EncryptPageComponent } from './component/encrypt-page/encrypt-page.component';
import { DecryptPageComponent } from './component/decrypt-page/decrypt-page.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { PrimaryBtnComponent } from './component/primary-btn/primary-btn.component';
import { OneKeyFormComponent } from './component/one-key-form/one-key-form.component';
import { TwoKeyFormComponent } from './component/two-key-form/two-key-form.component';
import { ThreeKeyFormComponent } from './component/three-key-form/three-key-form.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'encrypt', component: EncryptPageComponent},
  {path: 'decrypt', component: DecryptPageComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AddMessageComponent,
    CryptButtonComponent,
    TextAreaComponent,
    FindMessageComponent,
    IntroCardsComponent,
    DisclaimerOptionsComponent,
    KeyOptionsComponent,
    MessageViewComponent,
    SearchMessageComponent,
    SafeInfoComponent,
    HomeComponent,
    EncryptPageComponent,
    DecryptPageComponent,
    NavbarComponent,
    FooterComponent,
    PrimaryBtnComponent,
    OneKeyFormComponent,
    TwoKeyFormComponent,
    ThreeKeyFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
