import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ProcessFlowComponent } from './process-flow/process-flow.component';
import { TargetForComponent } from './target-for/target-for.component';



@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    ProcessFlowComponent,
    TargetForComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      }
    ])
  ]
})
export class HomeModule { }
