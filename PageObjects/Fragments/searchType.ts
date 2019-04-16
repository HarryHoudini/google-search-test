import { Input } from "./input";
export class SearchMode {
  protected containerLocator: string;

  protected get container() {
    return $(this.containerLocator);
  }
  protected searchLine: Input = new Input(() => {
    return this.container.$("input");
  });

  constructor(containerLocator: string) {
    this.containerLocator = containerLocator;
  }
  enterSearchText(searchMode: ISearchText) {
    $(this.containerLocator).waitForDisplayed(10000); // invisibility of loader
    this.searchLine.type(searchMode.searchText);
    $('#tsf [role="listbox"]').waitForDisplayed(10000);
  }
}
export interface ISearchText {
  searchText: string;
}
