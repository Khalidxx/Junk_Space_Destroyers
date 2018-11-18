import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Camera } from "@ionic-native/camera";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicStorageModule, Storage } from "@ionic/storage";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { GoogleMaps } from "@ionic-native/google-maps";
import { MobxAngularModule } from "mobx-angular";
import { Geolocation } from "@ionic-native/geolocation";
import { HTTP } from "@ionic-native/http";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { File } from "@ionic-native/file";
import { FileTransfer } from "@ionic-native/file-transfer";
import { FilePath } from "@ionic-native/file-path";

import { MerchantStore, CartStore, EmotionStore } from "../stores";

import {
  MerchantListProvider,
  Advert,
  Items,
  MerchantDetailProvider,
  CategoryListProvider,
  ConsumerCommentListProvider
} from "../providers";
import { Settings, User, Api } from "../providers";
import { MyApp } from "./app.component";
import { MerchantProvider } from "../providers/merchant/merchant";
import { MapApiProvider } from "../providers/map-api/map-api";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

export function provideSettings(storage: Storage) {
  return new Settings(storage, {
    language: "en",
    hasSeenTutorial: false
  });
}

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp, { tabsHideOnSubPages: true }),
    IonicStorageModule.forRoot(),
    MobxAngularModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    SplashScreen,
    StatusBar,
    GoogleMaps,
    Geolocation,
    HTTP,
    // initial default settings
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Api,
    MerchantListProvider,
    Items,
    CategoryListProvider,
    Advert,
    User,
    Camera,
    ConsumerCommentListProvider,
    MerchantProvider,
    MerchantDetailProvider,
    MerchantStore,
    CartStore,
    EmotionStore,
    MapApiProvider,
    BarcodeScanner,
    File,
    FileTransfer,
    FilePath
  ]
})
export class AppModule {}
