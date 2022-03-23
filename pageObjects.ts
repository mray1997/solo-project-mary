import {By} from "selenium-webdriver"
import {basePage} from "./basePage"

export class Etsy extends basePage {
    searchBar: By = By.xpath('//input[@id="global-enhancements-search-query"]');
    results: By = By.xpath('//span[text()="581 results,"]')
    addToCart: By = By.xpath('//button[@class="wt-btn wt-btn--filled wt-width-full"]')
    qaShirt: By = By.xpath('//li[@class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-1 wt-order-md-1 wt-order-lg-1 wt-show-xs wt-show-md wt-show-lg"]')
    constructor() {
        super({url: "https://www.etsy.com/"});
    }
    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
    }
    async getResults() {
        return this.getText(this.results)
    }
}