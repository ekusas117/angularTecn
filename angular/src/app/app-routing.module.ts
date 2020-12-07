import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CssComponent } from './css/css.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [{
  path: 'css',
  component: CssComponent
},
{
  path: '',
  component: MainPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
