import { BasePO } from "./base";

export class RbcMainPO extends BasePO {
  checkRedirect() {  
      $("body").waitForDisplayed(7000);   
  }
}
export const RbcMain = new RbcMainPO();
