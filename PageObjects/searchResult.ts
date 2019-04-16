import { BasePO } from "./base";
export class SearchResultPO extends BasePO {
  private get searchResult() {
    return $("#res #search");
  }
  public desiredURL;
  ResultContains(urlTarget: string): string {
    this.searchResult.waitForDisplayed(10000);
    let findUrl = this.searchResult
      .$$('.r>a[href*="http"] cite')
      .map(idx => idx.getText())
      .filter(idx => idx.includes(urlTarget) === true)
      .toString();
    this.desiredURL = findUrl;
    return findUrl;
  }
  open() {
    super.open(this.desiredURL);
  }

}
export const SearchResult = new SearchResultPO();
