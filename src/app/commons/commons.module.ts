import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { MsgFromBoniComponent } from './components/msg-from-boni/msg-from-boni.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [MsgFromBoniComponent],
    declarations: [MsgFromBoniComponent]
})
export class CommonsModule { }
