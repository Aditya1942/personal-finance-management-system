import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WavpayModule } from '@Components';
import { appRoutes } from 'app/app.routing';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from 'app/core/core.module';
import { FuseConfigModule } from '@Components/services/config';
import { appConfig } from 'app/core/config/app.config';
import { MarkdownModule } from 'ngx-markdown';
import { LayoutModule } from 'app/layout/layout.module';

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, routerConfig),
    MatButtonModule,
    WavpayModule,
    FuseConfigModule.forRoot(appConfig),

    MatIconModule,
    // Core module of your application
    CoreModule,

    // Layout module of your application
    LayoutModule,
    MarkdownModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
