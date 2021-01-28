import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { AbstractMenuBaseComponent } from '../commons/components/AbstractMenuBase.component';

@Component({
    selector: 'app-student-overview',
    templateUrl: './student-overview.component.html',
    styleUrls: ['./student-overview.component.scss']
})
export class StudentOverviewComponent extends AbstractMenuBaseComponent {
    constructor(menu: MenuController) {
        super(menu);
    }
}
