import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentOverviewComponent } from './student-overview/student-overview.component';
import { StudentSubjectsComponent } from './student-subjects/student-subjects.component';

const ROUTES: Routes = [
    {
        path: 'student/overview',
        component: StudentOverviewComponent
    }, {
        path: 'student/subjects',
        component: StudentSubjectsComponent
    }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'student/overview'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
