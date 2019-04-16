import { Search, SearchResult, RbcMain } from "../PageObjects";

describe("Guest", function() {
  it("search rbc.ru", function() {
    Search.open();
    Search.searchMode.enterSearchText({ searchText: "РБК" });
    Search.pressEnter();
    SearchResult.ResultContains("www.rbc.ru");
    SearchResult.open();
    RbcMain.checkRedirect();
  });
});
