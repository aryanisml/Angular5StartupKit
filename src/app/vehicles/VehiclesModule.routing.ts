import { Routes, Router, RouterModule } from '@angular/router';
import { IndexComponent } from './components/IndexComponent';

const routes: Routes = [
    {path: 'vehicles', component: IndexComponent}
]

export const VehicleModuleRouting = RouterModule.forChild(routes);