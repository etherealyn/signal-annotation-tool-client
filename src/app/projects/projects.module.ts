import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from '../app-routing.module';

import { ProjectsComponent } from './projects.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectModalComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ClarityModule,
    HttpClientModule,
  ]
})
export class ProjectsModule {
}
