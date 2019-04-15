import { BasePO } from "./base";
import { SearchMode } from "./Fragments/searchType";

export class SearchPO extends BasePO {
  public searchMode: SearchMode; 
   constructor() {
    super();
    this.searchMode = new SearchMode("#tsf .RNNXgb");        
  }
  private get searchButtons () { return $('#tsf .FPdoLc')}  
  open() {
    super.open("https://www.google.com/");
  }
  pressEnter() {
    browser.sendKeys(["\uE006"]); //sent Enter key
  }
  pressButtonSearch() {
    this.searchButtons.$('[name="btnK"]').click();
  }
  pressIamLucky() {
    this.searchButtons.$('[name="btnI"]').click();
  }
}
export const Search = new SearchPO();
