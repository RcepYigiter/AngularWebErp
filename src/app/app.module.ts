import { registerLocaleData } from '@angular/common';
import tr from '@angular/common/locales/tr';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { tr_TR } from 'ng-zorro-antd/i18n';
import { AppComponent } from './app.component';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NzIconModule } from 'ng-zorro-antd/icon';
registerLocaleData(tr);
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { StokYonetimiModule } from './pages/stok-yonetimi/stok-yonetimi.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzIconModule,
    NzInputModule,
    FormsModule,
    NzSelectModule,
    NzMenuModule,
    NzDividerModule,
    NzBreadCrumbModule,
    
  ],
  providers: [
    { provide: "baseUrl", useValue: "https://localhost:7051/api", multi: true },
    provideClientHydration(),
    { provide: NZ_I18N, useValue: tr_TR },
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
