describe('Test login flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should be able to login', async () => {
    await expect(element(by.id('login-btn'))).toBeVisible();
    await element(by.id('login-btn')).tap();
    await device.terminateApp();
  });
});

// describe('Test order list', () => {
//   beforeAll(async () => {
//     await device.launchApp();
//   });

//   it('should be able order list by price', async () => {
//     const filterByPricBtn = await element(by.id('filter-by-price-btn'));

//     await filterByPricBtn.tap();
//   });
// });