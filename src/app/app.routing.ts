import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { HomeComponent } from './home/home.component';
import { PreloadAfter3Sec } from './shared/custom.preloading.strategy';

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/home'
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'books',
  loadChildren: './book/book.module#BookModule',
  data: {
    preload: true
  }
},
{
  path: 'music',
  loadChildren: './music/music.module#MusicModule',
  data: {
    preload: false
  }
}
];

export const routing = RouterModule.forRoot(routes
,{
  preloadingStrategy: PreloadAfter3Sec
});
