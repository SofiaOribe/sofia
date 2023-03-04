import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about-me', component: AboutmeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'certificate', component: CertificateComponent},
  {path: 'configuration', component: ConfigurationComponent},
  {path: 'log', component: LogComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
