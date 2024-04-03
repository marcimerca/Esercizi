import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InactivePostsComponent } from './inactive-posts.component';
import { PostCardComponent } from '../post-card/post-card.component';

import { InactivePostsRoutingModule } from './inactive-posts-routing.module';

@NgModule({
    declarations: [InactivePostsComponent, PostCardComponent],
    imports: [CommonModule, InactivePostsRoutingModule],
})
export class InactivePostsModule {}
