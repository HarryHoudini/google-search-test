import { BasePO } from "./base";
import { expect } from "chai";
import { SearchResult, SearchResultPO } from "./";
export class RbcMainPO extends BasePO {
  checkRedirect() {
    expect(browser.getUrl()).to.be.equal(SearchResult.desiredURL);
    $("body").waitForDisplayed(7000);
  }
}
export const RbcMain = new RbcMainPO();
