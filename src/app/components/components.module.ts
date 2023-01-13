import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DetailApiComponent } from './detail-api/detail-api.component';
import { ApiJasonComponent } from './api-jason/api-jason.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DetailApiComponent,
    ApiJasonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    ApiJasonComponent
  ]
})
export class ComponentsModule { }
