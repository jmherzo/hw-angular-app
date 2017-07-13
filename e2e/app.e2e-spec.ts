import { HwAngularappPage } from './app.po';

describe('hw-angularapp App', () => {
  let page: HwAngularappPage;

  beforeEach(() => {
    page = new HwAngularappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
