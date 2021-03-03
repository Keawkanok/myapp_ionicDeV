import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { P2EditPage } from './p2-edit.page';

describe('P2EditPage', () => {
  let component: P2EditPage;
  let fixture: ComponentFixture<P2EditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2EditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(P2EditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
