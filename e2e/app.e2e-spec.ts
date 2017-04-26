import { ErptestPage } from './app.po';

describe('erptest App', () => {
  let page: ErptestPage;

  beforeEach(() => {
    page = new ErptestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
