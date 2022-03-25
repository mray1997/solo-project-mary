import { extensionsToTreatAsEsm } from "./jest.config";
import {Etsy} from "./pageObjects"

const etsy = new Etsy;

test("catagory buttons are functioning", async () => {
await  etsy.navigate();
await etsy.driver.manage().window().maximize();
await etsy.click(etsy.homeFavorites)
await etsy.click(etsy.jewelry)
await etsy.click(etsy.clothing)
await etsy.click(etsy.homeLiving)
await etsy.click(etsy.wedding)
await etsy.click(etsy.toys)
await etsy.click(etsy.art)
await etsy.click(etsy.crafts)
await etsy.click(etsy.gifts)
await etsy.driver.quit()
})