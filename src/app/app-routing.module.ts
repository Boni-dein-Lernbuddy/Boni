import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { SubjectsComponent } from './subjects/subjects.component';

const ROUTES: Routes = [
    {
        path: 'übersicht',
        component: OverviewComponent
    }, {
        path: 'meine-fächer',
        component: SubjectsComponent
    }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'übersicht'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
