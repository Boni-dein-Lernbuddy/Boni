import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommonsModule } from '../commons/commons.module';
import { StudentSubjectsComponent } from './student-subjects.component';

describe('StudentSubjectsComponent', () => {
    let component: StudentSubjectsComponent;
    let fixture: ComponentFixture<StudentSubjectsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [StudentSubjectsComponent],
            imports: [
                CommonsModule,
                IonicModule.forRoot()
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(StudentSubjectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
