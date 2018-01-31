import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// services
import { TwitchService } from './services/twitch.service';

// components
import { SearchComponent } from './components/search/search.component';
import { ThumbComponent } from './components/thumb/thumb.component';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';

// pages
import { GameListComponent } from './pages/game/game-list/game-list.component';
import { GameDetailsComponent } from './pages/game/game-details/game-details.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';
import { FixImgNamePipe } from './pipes/fix-img-name.pipe';
import { FilterDecimalPipe } from './pipes/filter-decimal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameDetailsComponent,
    SearchComponent,
    ThumbComponent,
    InfiniteScrollComponent,
    LoaderComponent,
    FilterByNamePipe,
    FixImgNamePipe,
    FilterDecimalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TwitchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
