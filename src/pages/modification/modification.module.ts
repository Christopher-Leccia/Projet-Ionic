import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModificationPage } from './modification';

@NgModule({
  declarations: [
    ModificationPage,
  ],
  imports: [
    IonicPageModule.forChild(ModificationPage),
  ],
})
export class ModificationPageModule {}
