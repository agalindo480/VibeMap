import { Routes } from '@angular/router';
import { Explore } from './pages/explore/explore';
import { CreatorProfile } from './pages/creator-profile/creator-profile';
import { GuideDetail } from './pages/guide-detail/guide-detail';
import { PlaceDetail } from './pages/place-detail/place-detail';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    { path: '', component: Explore },
    { path: 'u/:username', component: CreatorProfile },
    { path: 'g/:guideId', component: GuideDetail },
    { path: 'p/:placeId', component: PlaceDetail },
    { path: 'dashboard', component: Dashboard },
];