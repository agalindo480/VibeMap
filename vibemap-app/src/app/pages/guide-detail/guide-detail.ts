import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { supabase } from '../../supabase';

@Component({
  selector: 'app-guide-detail',
  imports: [FormsModule, RouterLink],
  templateUrl: './guide-detail.html',
  styleUrl: './guide-detail.css',
})
export class GuideDetail implements OnInit {
  guide: any = null;
  comments: any[] = [];
  newComment = '';

  constructor(private route: ActivatedRoute) { }

  async ngOnInit() {
    const guideId = this.route.snapshot.paramMap.get('guideId');

    const { data, error } = await supabase
      .from('guides')
      .select('*')
      .eq('id', guideId)
      .single();

    if (error) {
      console.error(error);
      return;
    }

    this.guide = data;
  }

  async saveGuide() {
    if (!this.guide) return;

    this.guide.saves_count++;

    await supabase
      .from('guides')
      .update({ saves_count: this.guide.saves_count })
      .eq('id', this.guide.id);
  }

  async likeGuide() {
    if (!this.guide) return;

    this.guide.likes_count++;

    await supabase
      .from('guides')
      .update({ likes_count: this.guide.likes_count })
      .eq('id', this.guide.id);
  }

  postComment() {
    if (!this.newComment.trim()) return;

    this.comments.push({
      username: '@guest',
      text: this.newComment,
    });

    this.newComment = '';
  }
}