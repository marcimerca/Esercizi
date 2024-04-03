import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivePostsComponent } from './active-posts.component';
import { PostCardComponent } from '../post-card/post-card.component';
import { PostDetailsComponent } from '../post-details/post-details.component';

import { ActivePostsRoutingModule } from './active-posts-routing.module';

@NgModule({
    declarations: [
        ActivePostsComponent,
        PostCardComponent,
        PostDetailsComponent,
    ],
    imports: [CommonModule, ActivePostsRoutingModule],
})
export class ActivePostsModule {}
