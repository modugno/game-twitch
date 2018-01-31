import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameListComponent } from '../app/pages/game/game-list/game-list.component';
import { GameDetailsComponent } from '../app/pages/game/game-details/game-details.component';

const routes: Routes = [
    {
        path: '',
        component: GameListComponent
    },
    {
        path: 'details',
        component: GameDetailsComponent
    }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}