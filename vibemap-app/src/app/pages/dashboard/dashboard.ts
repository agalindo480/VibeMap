import { supabase } from '../../supabase';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  guideTitle = '';
  guideDescription = '';
  guideType = 'Ranked Guide';
  selectedGuideTitle = '';

  selectedPlaceName = 'Ghost Ranch';
  favoriteDish = '';
  favoriteDrink = '';
  creatorNote = '';

  fakePlaceResults = [
    { name: 'Ghost Ranch', location: 'Tempe, AZ', type: 'Restaurant', rating: 4.6 },
    { name: 'Top of the Rock', location: 'Tempe, AZ', type: 'Restaurant', rating: 4.5 },
    { name: 'Bacanora', location: 'Phoenix, AZ', type: 'Restaurant', rating: 4.7 },
  ];

  guides = [
    {
      icon: '❤️',
      title: 'Best Date Nights in Phoenix',
      type: 'Ranked Guide',
      places: 2,
      saves: 248,
      likes: 94,
    },
    {
      icon: '🔥',
      title: 'Hidden Gems',
      type: 'Unranked Guide',
      places: 5,
      saves: 112,
      likes: 40,
    },
  ];

  places = [
    {
      name: 'Ghost Ranch',
      dish: 'Short Rib Tacos',
      drink: 'Spicy Margarita',
    },
  ];

  async createGuide() {
    if (!this.guideTitle.trim()) {
      return;
    }

    const { data, error } = await supabase
      .from('guides')
      .insert([
        {
          title: this.guideTitle,
          description: this.guideDescription,
          guide_type: this.guideType,
        },
      ])
      .select();

    if (error) {
      console.error(error);
      return;
    }

    console.log('Guide Saved:', data);

    this.guides.push({
      icon: '🗺️',
      title: this.guideTitle,
      type: this.guideType,
      places: 0,
      saves: 0,
      likes: 0,
    });

    this.guideTitle = '';
    this.guideDescription = '';
    this.guideType = 'Ranked Guide';
  }

  selectPlace(placeName: string) {
    this.selectedPlaceName = placeName;
  }

  async addPlace() {
    const selectedGuide = this.guides.find(
      guide => guide.title === this.selectedGuideTitle
    );

    const { data, error } = await supabase
      .from('places')
      .insert([
        {
          place_name: this.selectedPlaceName,
          favorite_dish: this.favoriteDish,
          favorite_drink: this.favoriteDrink,
          creator_note: this.creatorNote,
          vibe_tags: this.selectedGuideTitle,
        },
      ])
      .select();

    if (error) {
      console.error(error);
      return;
    }

    console.log('Place Saved:', data);

    this.places.push({
      name: this.selectedPlaceName,
      dish: this.favoriteDish,
      drink: this.favoriteDrink,
    });

    if (selectedGuide) {
      selectedGuide.places++;
    }

    this.favoriteDish = '';
    this.favoriteDrink = '';
    this.creatorNote = '';
  }
}