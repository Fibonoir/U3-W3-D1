import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FakeAuthGuard } from './guards/fake-auth.guard';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule),
  },
  {
    path: "otherPage",
    loadChildren: () => import("./modules/other-page/other-page.module").then(m => m.OtherPageModule)
  },
  {
    path: "posts",
    loadChildren: () => import("./modules/posts/posts.module").then(m => m.PostsModule),
    canActivate: [FakeAuthGuard]
  },
  {
    path: "noAccess",
    loadChildren: () => import("./modules/no-access/no-access.module").then(m => m.NoAccessModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
