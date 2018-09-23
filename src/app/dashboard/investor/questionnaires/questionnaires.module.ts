import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnairesRoutingModule } from './questionnaires-routing.module';
import { QuestionnairesComponent } from './questionnaires.component';

@NgModule({
  imports: [
    CommonModule,
    QuestionnairesRoutingModule
  ],
  declarations: [QuestionnairesComponent]
})
export class QuestionnairesModule { }
