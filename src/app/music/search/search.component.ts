import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ISpotifyIResult, MusicService } from './../shared/music.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
searchStr: string;
  searchResult: ISpotifyIResult;
  title = 'Search for Artists.';

  constructor(private _spotify: MusicService, private router: Router) {}

  ngOnInit() {
  }

  searchMusic() {
    if (this.searchStr.length !== 0) {
      this._spotify.searchArtists(this.searchStr)
        .subscribe(res => {
          console.log(res);
          this.searchResult = res.artists;
        });
    } else {
      this.searchResult = null;
    }
  }

  selectArtist(id: string) {
    console.log('navigate id:', id);
    this.router.navigate(['/music', id]);
  }

}
