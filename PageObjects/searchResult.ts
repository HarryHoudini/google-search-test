import { BasePO } from "./base";
export class SearchResultPO extends BasePO {
  private get searchResult() {
    return $("#res #search");
  }
  private resul;
  ResultContains(urlTarget: string): string {
    this.searchResult.waitForDisplayed(10000);
    let findUrl = this.searchResult
      .$$('.r>a[href*="http"] cite')
      .map(idx => idx.getText())
      .filter(idx => idx.includes(urlTarget) === true)
      .toString();
    this.resul = findUrl;
    return findUrl;
  }
  open() {
    super.open(this.resul);
  }

}
export const SearchResult = new SearchResultPO();
