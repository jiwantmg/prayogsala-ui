import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';

const modules: any[] = [
  AuthModule,
  LayoutModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class CoreModule { }
