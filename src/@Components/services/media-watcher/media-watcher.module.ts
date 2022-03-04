import { NgModule } from '@angular/core';
import { FuseMediaWatcherService } from '@Components/services/media-watcher/media-watcher.service';

@NgModule({
  providers: [FuseMediaWatcherService],
})
export class FuseMediaWatcherModule {
  /**
   * Constructor
   */
  constructor(private _fuseMediaWatcherService: FuseMediaWatcherService) {}
}
