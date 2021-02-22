import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirebasePage } from './firebase.page';

describe('FirebasePage', () => {
  let component: FirebasePage;
  let fixture: ComponentFixture<FirebasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirebasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
