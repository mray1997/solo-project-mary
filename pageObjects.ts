import {By} from "selenium-webdriver"
import {basePage} from "./basePage"

export class Etsy extends basePage {
    searchBar: By = By.xpath('//input[@id="global-enhancements-search-query"]');
    results: By = By.xpath('//span[text()="594 results,"]');
    addToCart: By = By.xpath('//button[@class="wt-btn wt-btn--filled wt-width-full"]');
    qaMug: By = By.xpath('//li[@class="wt-list-unstyled wt-grid__item-xs-6 wt-grid__item-md-4 wt-grid__item-lg-3 wt-order-xs-0 wt-order-md-0 wt-order-lg-0 wt-show-xs wt-show-md wt-show-lg"]');
    signIn: By = By.xpath('//button[@class="wt-btn wt-btn--small wt-btn--transparent wt-mr-xs-1 inline-overlay-trigger signin-header-action select-signin"]');
    signIn2: By = By.xpath('//button[@class="wt-btn wt-btn--primary wt-width-full"]');
    emailInput: By = By.xpath('//input[@id="join_neu_email_field"]');
    passwordInput: By = By.xpath('//input[@id="join_neu_password_field"]');
    yourAccount: By = By.xpath('//img[@class="wt-circle wt-icon"]');
    heart: By = By.xpath('//div[@class="favorite-listing-button-icon-container should-animate "]');
    jewelry: By = By.xpath('//span[@id="catnav-primary-link-10855"]');
    homeFavorites:By = By.xpath('//span[text()="Home Favorites"]');
    clothing: By = By.xpath('//span[@id="catnav-primary-link-10923"]');
    homeLiving: By = By.xpath('//span[@id="catnav-primary-link-891"]');
    wedding: By = By.xpath('//span[@id="catnav-primary-link-10983"]');
    toys: By = By.xpath('//span[@id="catnav-primary-link-11049"]');
    art: By = By.xpath('//span[@id="catnav-primary-link-66"]');
    crafts: By = By.xpath('//span[@id="catnav-primary-link-562"]');
    gifts: By = By.xpath('//span[@id="catnav-primary-link--10"]');
    signOut: By = By.xpath('//a[@class="wt-menu__item wt-display-flex-xs wt-align-items-center wt-justify-content-flex-start wt-pt-xs-1 wt-pb-xs-1 wt-mt-xs-4"]');


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