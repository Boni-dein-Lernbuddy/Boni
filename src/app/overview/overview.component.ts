import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { AbstractMenuBaseComponent } from '../commons/components/AbstractMenuBase.component';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent extends AbstractMenuBaseComponent {
    constructor(menu: MenuController) {
        super(menu);
    }
}
