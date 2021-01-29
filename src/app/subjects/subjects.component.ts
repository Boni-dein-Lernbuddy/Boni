import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { AbstractMenuBaseComponent } from '../commons/components/AbstractMenuBase.component';
import { Folder } from '../commons/models/Folder';
import { FoldersMockService } from '../commons/service/folders-mock.service';

@Component({
    selector: 'app-student-subjects',
    templateUrl: './subjects.component.html',
    styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent extends AbstractMenuBaseComponent implements OnInit {
    currentFolder: Folder;

    constructor(
        private menu: MenuController,
        private folders: FoldersMockService
    ) {
        super(menu);
    }

    ngOnInit() {
        this.currentFolder = this.folders.getFolderStructure();
    }

    selectFolder(folder: Folder) {
        this.currentFolder = folder;
    }

    get navTitleFolders(): Folder[] {
        const folders: Folder[] = [];

        folders.push(this.currentFolder);
        let folder = this.currentFolder;
        while (folder.parent) {
            folder = folder.parent;
            folders.push(folder);
        }

        return folders.reverse();
    }

    get isCurrentFolderEmpty(): boolean {
        return !this.currentFolder.children?.length && !this.currentFolder.feedItems?.length;
    }
}
