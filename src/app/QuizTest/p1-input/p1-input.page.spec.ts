import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { P1InputPage } from './p1-input.page';

describe('P1InputPage', () => {
  let component: P1InputPage;
  let fixture: ComponentFixture<P1InputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P1InputPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(P1InputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
