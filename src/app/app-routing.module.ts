import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PortfolioBodyComponent } from '@app/modules';
// import { environment } from '@env/environment';

// const debugMode = (environment.production) ? false : true;

const routes: Routes = [
  { path: '**', loadChildren: 'app/modules/home/home.module#HomeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      // enableTracing: debugMode,
      preloadingStrategy: PreloadAllModules,
      useHash: false
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
