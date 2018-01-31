import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Games } from '../../../models/games';
import { TwitchService } from '../../../services/twitch.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {

  public game: Games = new Games;

  constructor(
    private _twitchService: TwitchService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setGame();
  }

  /**
   * Set Game to show
   */
  private setGame() {
    if (!this._twitchService.storage) {
      return this.router.navigate(['/']);
    }

    this.game = this._twitchService.storage;
  }

  /**
   * Go back to home
   */
  goBack() {
    return this.router.navigate(['/']);
  }

}
