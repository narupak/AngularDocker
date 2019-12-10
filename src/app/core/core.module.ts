import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BackgroundComponent } from './background/background.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import {MegaMenuModule} from 'primeng/megamenu';


@NgModule({
  imports: [
    CommonModule,
    MegaMenuModule
  ],
  declarations: [FooterComponent, TopbarComponent, BackgroundComponent, SidebarComponent],
  exports: [FooterComponent, TopbarComponent, BackgroundComponent, SidebarComponent]
})
export class CoreModule { }
