import { Routes, Router, RouterModule } from '@angular/router';
import { IndexComponent } from './home/IndexComponent';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: IndexComponent},
    //{path: 'projects', loadChildren: 'app/projects/projects.module#ProjectsModule'}
]

export const AppRoutingModule = RouterModule.forRoot(routes, {useHash: true});