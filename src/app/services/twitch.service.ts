import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class TwitchService {

  private endpoint: string = 'https://api.twitch.tv/kraken/games/';
  private API_KEY: string  = 'oou228jsk6nypimwoaocjunvoexrz6';

  public storage: any;
  
  constructor(private _http: HttpClient) { }

  /**
   * Get all games
   */
  getAll(limit: number = 10, offset: number = undefined) {
    let url = `${this.endpoint}top?limit=${limit}`;

    if (offset) {
      url += `&offset=${offset}`;
    }

    let headerOptions = new HttpHeaders().set('Client-ID', this.API_KEY);
    return this._http.get<Object[]>(url, { headers: headerOptions, observe: 'response' });
  }

  // https://api.twitch.tv/kraken/games/top?limit=1&offset=3

}
