export class BasePO {
//Need implements
 isLoaded(){
   throw new Error ("isLoaded method is not implement")
 } 
  open(url:string = "google.com") {
    console.log("Navigation to:", url);
    browser.url(url);
  }
}
