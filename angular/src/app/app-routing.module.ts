import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CssComponent } from './css/css.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ReactComponent } from './react/react.component';
import { JscriptComponent } from './jscript/jscript.component';


const routes: Routes = [{
  path: 'react',
  component: ReactComponent
},{
  path: 'css',
  component: CssComponent
},{
  path: 'js',
  component: JscriptComponent
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
