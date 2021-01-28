import { MenuController } from '@ionic/angular';

export abstract class AbstractMenuBaseComponent {
    menuId: 'menu-base' = 'menu-base';

    protected constructor(private controller: MenuController) { }

    openMenu() {
        this.controller.open(this.menuId)
            .then(() => { })
            .catch(console.error);
    }

    closeMenu() {
        this.controller.close(this.menuId)
            .then(() => { })
            .catch(console.error);
    }
}
