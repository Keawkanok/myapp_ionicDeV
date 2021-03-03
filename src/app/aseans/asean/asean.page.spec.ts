import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AseanPage } from './asean.page';

describe('AseanPage', () => {
  let component: AseanPage;
  let fixture: ComponentFixture<AseanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AseanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AseanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
