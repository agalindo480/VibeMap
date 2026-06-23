import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guide-detail',
  imports: [FormsModule],
  templateUrl: './guide-detail.html',
  styleUrl: './guide-detail.css',
})
export class GuideDetail {
  saves = 248;
  likes = 94;
  comments = [
    {
      username: '@maya',
      text: 'Used this guide last weekend. Ghost Ranch was perfect.',
    },
    {
      username: '@jason',
      text: 'Saving this for my trip next month.',
    },
  ];

  newComment = '';

  saveGuide() {
    this.saves++;
  }

  likeGuide() {
    this.likes++;
  }

  postComment() {
    if (!this.newComment.trim()) {
      return;
    }

    this.comments.push({
      username: '@guest',
      text: this.newComment,
    });

    this.newComment = '';
  }
}