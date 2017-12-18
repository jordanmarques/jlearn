import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { KatakanaDao } from './writing/katakana/katakana-dao';
import { HiraganaDao } from './writing/hiragana/hiragana-dao';
import { HiraganaService } from './writing/hiragana/hiragana-service';
import { KatakanaService } from './writing/katakana/katakana-service';
import { KanaService } from './writing/service/kana-service';
import {DetailPage} from "../pages/detail/detail";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    KatakanaDao,
    HiraganaDao,
    HiraganaService,
    KatakanaService,
    KanaService,
  ]
})
export class AppModule {}
