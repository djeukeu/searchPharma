import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrugdetailPage } from './drugdetail.page';

describe('DrugdetailPage', () => {
  let component: DrugdetailPage;
  let fixture: ComponentFixture<DrugdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrugdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
