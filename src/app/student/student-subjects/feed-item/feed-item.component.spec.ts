import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedItemComponent } from './feed-item.component';

describe('FeedItemComponent', () => {
    let component: FeedItemComponent;
    let fixture: ComponentFixture<FeedItemComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FeedItemComponent],
            imports: [
                IonicModule.forRoot(),
                HttpClientTestingModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(FeedItemComponent);
        component = fixture.componentInstance;
        component.item = { id: 123, type: 'text' };
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
