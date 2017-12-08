import { Routes, Router, RouterModule } from '@angular/router';
import { IndexComponent } from './components/IndexComponent';
import { EntryComponent } from './components/EntryComponent';

const routes: Routes = [
    {path: 'vehicles', component: IndexComponent},
    {path: 'vehicles/edit', component: EntryComponent},
    {path: 'vehicles/edit/:id', component: EntryComponent}
    
]

export const VehicleModuleRouting = RouterModule.forChild(routes);