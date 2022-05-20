import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentStackService } from './content-stack.service';
import { Config } from './config';
export const CsbaseAppConfigToken = new InjectionToken<string>('CsbaseAppConfigToken');

export function _csbaseAppFactory(config: any) {
  try {
    return new ContentStackService(config);
  } catch (e) {
    //@ts-ignore
    return new ContentStackService(null);
  }
}

const ContentstackAppProvider = {
  provide: ContentStackService,
  useFactory: _csbaseAppFactory,
  deps: [CsbaseAppConfigToken]
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ContentstackAppProvider]
})
export class ContentStackModule {

  static initializeApp(config: Config): ModuleWithProviders<ContentStackModule> {
    return {
      ngModule: ContentStackModule,
      providers: [
        {provide: CsbaseAppConfigToken, useValue: config}
      ]
    }
  }

 }
