describe("Example", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });

  it("should count to one if pressed once", async () => {
    await expect(element(by.id("runningState"))).toHaveText("0");
    await element(by.id("startButton")).tap();
    await expect(element(by.id("runningState"))).toHaveText("1");
  });
  //  ボタンを押して文字が変更してるかどうか調べるやつ
  it("should count to one if pressed 4 times", async () => {
    await expect(element(by.id("runningState"))).toHaveText("0");
    await element(by.id("startButton")).multiTap(4);
    await expect(element(by.id("runningState"))).toHaveText("4");
  });

  it("should write into TextInput", async () => {
    await element(by.id("input")).typeText("Hello World");
    await element(by.id("input")).clearText();
    await element(by.id("input")).typeText("bye!");
  });

  it("should scroll the name by 1", async () => {
    await element(by.id("list")).scroll(100, "down");
  });

  it("should scroll till list end", async () => {
    await element(by.id("list")).scrollTo("bottom");
  });

  // it.only("should write into TextInput", async () => {
  //   await element(by.id("input")).typeText("Hello World");
  //   await element(by.id("input")).clearText();
  //   await element(by.id("input")).typeText("bye!");
  // });
});
