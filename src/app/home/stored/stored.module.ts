import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoredPageRoutingModule } from './stored-routing.module';

import { StoredPage } from './stored.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoredPageRoutingModule
  ],
  declarations: [StoredPage]
})
export class StoredPageModule {}
