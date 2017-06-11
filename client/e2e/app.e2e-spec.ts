import { FocusClientPage } from './app.po';

describe('focus-client App', () => {
  let page: FocusClientPage;

  beforeEach(() => {
    page = new FocusClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
