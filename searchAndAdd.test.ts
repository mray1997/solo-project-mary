import { extensionsToTreatAsEsm } from "./jest.config";
import {Etsy} from "./pageObjects"

const etsy = new Etsy;

test("does a search", async () => {
await  etsy.navigate();
await etsy.search("qa tester")
expect(await etsy.getResults()).toContain("581 results,")
await etsy.click(etsy.qaShirt)
await etsy.click(etsy.addToCart)
await etsy.driver.quit()
})
