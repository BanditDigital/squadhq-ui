import { SquadhqUiPage } from './app.po';

describe('squadhq-ui App', () => {
  let page: SquadhqUiPage;

  beforeEach(() => {
    page = new SquadhqUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
