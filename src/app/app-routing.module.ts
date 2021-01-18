import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
    }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'student/overview'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
