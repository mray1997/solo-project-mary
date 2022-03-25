import { Etsy } from "./pageObjects";

const etsy = new Etsy

test("etsy favorites", async () => {
    await etsy.navigate();
    await etsy.driver.manage().window().maximize();
    await etsy.navigate();
    await etsy.search("qa tester");
    expect(await etsy.getResults()).toContain("594 results,");
    await etsy.click(etsy.qaMug);
    let etsyTabs = await etsy.driver.getAllWindowHandles();
    await etsy.driver.switchTo().window(etsyTabs[1]);
    await etsy.click(etsy.heart)
})