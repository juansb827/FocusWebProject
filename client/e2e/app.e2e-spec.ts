import {browser,element,by} from 'protractor'
import { FocusClientPage } from './app.po';


describe('Page: login',()=>{
  it('should have a title of login ',()=>{
    browser.get('/login');
    const title=element(by.css('span')).getText();
    expect(title).toEqual('Iniciar Sesión');    
  })
}) 
/*describe('focus-client App', () => {
  let page: FocusClientPage;

  beforeEach(() => {
    page = new FocusClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
*/