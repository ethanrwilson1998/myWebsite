import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { 
  path: 'projects-main', 
  loadChildren: './projects-main/projects-main.module#ProjectsMainPageModule' 
  },
  { 
  path: 'project-template', 
  loadChildren: './projects/project-template/project-template.module#ProjectTemplatePageModule' 
  },
  { 
  path: 'resume', 
  loadChildren: './resume/resume.module#ResumePageModule' 
  },
  { 
  path: 'research-main', 
  loadChildren: './research-main/research-main.module#ResearchMainPageModule' 
  },
  { 
  path: 'locomotion', 
  loadChildren: './research/locomotion/locomotion.module#LocomotionPageModule' 
  },  { path: 'worm-wranglers', loadChildren: './projects/worm-wranglers/worm-wranglers.module#WormWranglersPageModule' },
  { path: 'dark-souls-four', loadChildren: './projects/dark-souls-four/dark-souls-four.module#DarkSoulsFourPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
