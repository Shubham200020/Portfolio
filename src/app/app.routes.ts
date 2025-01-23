import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowDataComponent } from './show-data/show-data.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"showdata",component:ShowDataComponent}

    
];
