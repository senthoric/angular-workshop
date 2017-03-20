import { ActivatedRoute } from '@angular/router';
import { MusicService, IArtists, IAlbum } from './../shared/music.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  id: string;
  artist: IArtists;
  albums: IAlbum[];
  album: IAlbum;
  private sub: any;

  constructor(private _spotifyService: MusicService, private route: ActivatedRoute) {}

  ngOnInit() {
      this.sub = this.route
        .params
        .subscribe(params => {
          this.id = params['id'];
          this._spotifyService.getAlbum(this.id)
            .subscribe(res => {

              this.album = res;
              console.log('Album:', this.album);
            });

        });
  }

}
