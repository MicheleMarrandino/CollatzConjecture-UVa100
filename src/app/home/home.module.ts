import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CountUpModule } from 'ngx-countup';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { InputComponent } from '../components/input/input.component';
import { OutputComponent } from './../components/output/output.component';
import { BoldTextPipe } from '../pipes/bold-text.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountUpModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, InputComponent, OutputComponent, BoldTextPipe],
})
export class HomePageModule {}
