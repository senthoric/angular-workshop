import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicService } from './shared/music.service';
import { MusicRoutingModule } from './music-routing.module';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { MusicComponent } from './music/music.component';
import { DurationPipe } from './shared/duration.pipe';
import { AlbumPreviewComponent } from './album-preview/album-preview.component';

@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule,
    FormsModule
  ],
  providers: [MusicService],
  declarations: [SearchComponent, ArtistComponent, AlbumComponent, MusicComponent, DurationPipe, AlbumPreviewComponent]
})
export class MusicModule { }
