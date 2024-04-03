import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InactivePostsComponent } from './inactive-posts.component';
import { PostDetailsComponent } from '../post-details/post-details.component';

const routes: Routes = [
    {
        path: '',
        component: InactivePostsComponent,
    },
    {
        path: ':id',
        component: PostDetailsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InactivePostsRoutingModule {}
