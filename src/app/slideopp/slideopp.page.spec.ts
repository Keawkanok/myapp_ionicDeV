import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlideoppPage } from './slideopp.page';

describe('SlideoppPage', () => {
  let component: SlideoppPage;
  let fixture: ComponentFixture<SlideoppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideoppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlideoppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
