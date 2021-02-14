import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Bmip2Page } from './bmip2.page';

describe('Bmip2Page', () => {
  let component: Bmip2Page;
  let fixture: ComponentFixture<Bmip2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bmip2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Bmip2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
