import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { FilenotfoundComponent } from './components/filenotfound/filenotfound.component';
import { ProfileComponent } from './components/profile/profile.component';

const appRoutes: Routes = [
    { 
        path: '', 
        component: HomeComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    { 
        path: '**', 
        component: FilenotfoundComponent 
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
})

export class AppRoutingModule { }
