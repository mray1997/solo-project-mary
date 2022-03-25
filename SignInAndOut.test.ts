import { Etsy } from "./pageObjects";

const etsy = new Etsy

test("sign In and Out", async () => {
    await etsy.navigate();
    await etsy.driver.manage().window().maximize();
    await etsy.click(etsy.signIn);
    await etsy.setInput(etsy.emailInput,"testemail3456@yahoo.com");
    await etsy.setInput(etsy.passwordInput, "testpassword");
    await etsy.click(etsy.signIn2);
    await etsy.click(etsy.yourAccount);
    await etsy.click(etsy.signOut)
})