import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { SubjectsComponent } from './subjects/subjects.component';

const ROUTES: Routes = [
    {
        path: 'uebersicht',
        component: OverviewComponent
    }, {
        path: 'meine-faecher',
        component: SubjectsComponent
    }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'uebersicht'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
