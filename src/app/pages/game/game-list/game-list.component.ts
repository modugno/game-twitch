import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwitchService } from '../../../services/twitch.service';
import { Games } from '../../../models/games';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  
  public games: Games[] = [];

  public loading: boolean;
  
  private page: number = 1;
  
  public search: string;
  
  private perPage: Object = {
    mobile: 25,
    tablet: 50,
    desktop: 100
  };
  
  constructor(
    private _twitchService: TwitchService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.loading = true;
    this.getAllGames();
  }
  
  /**
  * Get All Games
  */
  getAllGames() {
    let perPage = this.getPerPage();
    
    this._twitchService.getAll(perPage).subscribe(
      this.callbackGetAllGames.bind(this), 
      this.handlerError.bind(this)
    )
  }
  
  /**
  * Callback Get all games
  * @param games 
  */
  private callbackGetAllGames(games) {
    
    for (let game of games.body['top']) {
      this.games.push(game);
    }
    
    this.loading = false;
  }
  
  /**
  * 
  * @param event 
  */
  doInfiniteScroll(event) {
    
    let perPage = this.getPerPage();
    
    let offset = perPage * this.page;
    
    // get new games on list
    this._twitchService.getAll(perPage, offset).subscribe(
      games => {
        this.callbackGetAllGames(games);
        event.complete();
      },
      error => {
        this.handlerError(error);
        event.complete();
      }
    )
    
    this.page += 1;
  }
  
  /**
  * Get items per page based on device 
  */
  private getPerPage() {
    let width = window.innerWidth;
    
    if (width < 540) {
      return this.perPage['mobile']
      
    } else if (width >= 540 && width < 720) {
      return this.perPage['tablet']
      
    } else if (width >= 720) {
      return this.perPage['desktop']
      
    }
  }
  
  /**
  * When search input change, update search value
  * @param search 
  * @param value 
  */
  onSearch(search, value: string) {
    search.value = value;
  }

  /**
   * When popularity was clicked
   * @param active 
   */
  onPopularity(active: boolean) {
    if (!active) {
      return this.games.sort((a, b) => (a.game['popularity'] < b.game['popularity']) ? -1 : ((a.game['popularity'] > b.game['popularity']) ? 1 : 0));
    }

    this.games.sort((a, b) => (a.game['popularity'] > b.game['popularity']) ? -1 : ((a.game['popularity'] < b.game['popularity']) ? 1 : 0));
  }
  
  /**
   * When popularity was clicked
   * @param active 
   */
  onViewers(active: boolean) {
    if (!active) {
      return this.games.sort((a, b) => (a.viewers < b.viewers) ? -1 : ((a.viewers > b.viewers) ? 1 : 0));
    }

    this.games.sort((a, b) => (a.viewers > b.viewers) ? -1 : ((a.viewers < b.viewers) ? 1 : 0));
  }

  /**
   * Open Game
   * @param game 
   */
  openGame(game: any) {
    this._twitchService.storage = game;
    this.router.navigate(['details']);
  }

  /**
  * Handler all erros
  * @param error
  */
  private handlerError(error: any) {
    console.log('ERROR', error);
  }
}
