import { ImatityaMEANExamplePage } from './app.po';

describe('imatitya-mean-example App', () => {
  let page: ImatityaMEANExamplePage;

  beforeEach(() => {
    page = new ImatityaMEANExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
