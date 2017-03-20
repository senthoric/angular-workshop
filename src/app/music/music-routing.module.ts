import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicComponent } from './music/music.component';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [{
  path: '',
  component: MusicComponent,
  children: [{
    path: '',
    component: SearchComponent
  },
  {
    path: ':id',
    component: ArtistComponent
  },
  {
    path: 'album/:id',
    component: AlbumComponent
  }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MusicRoutingModule { }
