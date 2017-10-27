/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   27-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 27-10-2017
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndexPage } from './index';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    IndexPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(IndexPage),
  ],
  providers: []
})
export class IndexPageModule {}