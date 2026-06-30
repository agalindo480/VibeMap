import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { supabase } from '../../supabase';

@Component({
  selector: 'app-creator-profile',
  imports: [RouterLink],
  templateUrl: './creator-profile.html',
  styleUrl: './creator-profile.css',
})
export class CreatorProfile implements OnInit {
  guides: any[] = [];

  async ngOnInit() {
    const { data, error } = await supabase
      .from('guides')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    this.guides = data || [];
  }
}