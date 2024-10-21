import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "",
  loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule),

},
{
  path: "otherPage",
  loadChildren: () => import("./modules/other-page/other-page.module").then(m => m.OtherPageModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
