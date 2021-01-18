import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { StudentOverviewComponent } from './student-overview.component';

describe('StudentOverviewComponent', () => {
    let component: StudentOverviewComponent;
    let fixture: ComponentFixture<StudentOverviewComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [StudentOverviewComponent],
            imports: [
                IonicModule.forRoot(),
                RouterTestingModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(StudentOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
