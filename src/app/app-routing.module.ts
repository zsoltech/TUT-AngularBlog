import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { PostCreateComponent } from './post-create/post-create.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },

  { path: 'post/create', component: PostCreateComponent },
  { path: 'post/:id', component: PostComponent },

  // {
  //   path: 'admin',
  //   children: [
  //     {
  //       path: 'users',
  //       component: PostsComponent
  //     },
  //     {
  //       path: 'settings',
  //       component: PostsComponent
  //     }
  //   ]
  // },

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },

  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
