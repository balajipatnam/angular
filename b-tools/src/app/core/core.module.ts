import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToastService } from '../services/toast.service';
import { throwIfAlreadyLoaded } from './module-import.guard';

@NgModule({
  imports: [HttpClientModule],
  providers: [ToastService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
