import { NgdemoPage } from './app.po';

describe('ngdemo App', () => {
  let page: NgdemoPage;

  beforeEach(() => {
    page = new NgdemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
