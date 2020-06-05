import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserInformationPage } from './user-information.page';

describe('UserInformationPage', () => {
  let component: UserInformationPage;
  let fixture: ComponentFixture<UserInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
