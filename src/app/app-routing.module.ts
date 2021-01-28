import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentOverviewComponent } from './student-overview/student-overview.component';
import { StudentSubjectsComponent } from './student-subjects/student-subjects.component';

const ROUTES: Routes = [
    {
        path: 'uebersicht',
        component: StudentOverviewComponent
    }, {
        path: 'meine-faecher',
        component: StudentSubjectsComponent
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
