import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListbuyPage } from './listbuy.page';

describe('ListbuyPage', () => {
  let component: ListbuyPage;
  let fixture: ComponentFixture<ListbuyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbuyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListbuyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
