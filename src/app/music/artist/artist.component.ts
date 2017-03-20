import { MusicService, IArtists, IAlbum } from '../shared/music.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
id: string;
  artist: IArtists;
  albums: IAlbum;
  private sub: any;

  constructor(
    private _spotifyService: MusicService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        this.id = params['id'];
        this._spotifyService.getArtist(this.id)
          .subscribe(res => {
            this.artist = res;
          });
        this._spotifyService.getAlbums(this.id)
          .subscribe(res => {
            this.albums = res;
          });

      });
  }

  selectAlbum(id: string) {
    this.router.navigate(['/music/album', id]);
  }
}
