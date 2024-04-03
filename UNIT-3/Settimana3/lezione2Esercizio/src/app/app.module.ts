import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { HighlightDirective } from './directives/highlight.directive';

import { EllipsisPipe } from './pipes/ellipsis.pipe';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'activePosts',
        loadChildren: () =>
            import('./components/active-posts/active-posts.module').then(
                (m) => m.ActivePostsModule
            ),
    },
    {
        path: 'inactivePosts',
        loadChildren: () =>
            import('./components/inactive-posts/inactive-posts.module').then(
                (m) => m.InactivePostsModule
            ),
    },

    {
        path: 'users',
        loadChildren: () =>
            import('./components/users/users.module').then(
                (m) => m.UsersModule
            ),
    },
    {
        path: '**',
        component: Error404Component,
    },
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavbarComponent,
        HomeComponent,
        HighlightDirective,
        EllipsisPipe,
    ],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
