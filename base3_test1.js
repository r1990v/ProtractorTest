describe('BASE 3X Workbench UI/UX testing POC', function() {
	
	var BASE_URL='https://workbench-b3xdev.platform.deltaverge.com/login';
	var username = element(by.xpath("/html/body/app-root/app-login/div/div/div[2]/div[1]/form/div[1]/div/div/input"));
	var password = element(by.xpath("/html/body/app-root/app-login/div/div/div[2]/div[1]/form/div[2]/div/div/input"));
	var loginButton = element(by.xpath("/html/body/app-root/app-login/div/div/div[2]/div[1]/form/div[4]/button"));
	//var createNewProjectButton = element(by.xpath("//*[@id='ngb-tab-0-panel']/div/div[1]/div"));
	var projectName = element(by.xpath("(//*[@id='form1'])[1]"));
	var processName = element(by.xpath("(//*[@id='form1'])[2]"));
	var projectDescription = element(by.xpath("//*[@id='form7']"));
	var createNewProjectButton = element(by.xpath("/html/body/ngb-modal-window/div/div/new-project/div/div[3]/button[2]"));
	var logoffButton = element(by.xpath("/html/body/app-root/app-business-analyst/app-workbench/app-sidebar/div/app-header/div/div/div/a"));
	
  it('1. Launch URL', function() {
    
	  browser.get(BASE_URL);
    //Assertion
    expect(browser.getTitle()).toEqual("BASE_IDE_Development");
    
  });
  
  it('2. Login To Base', function(){
		//Input user name
	    username.sendKeys("rm@wipro.com");
	    //Input Password
	    password.sendKeys("raunak27");
	    //Click Login Button
	    loginButton.click();
	    //Assertion
	   expect(browser.getTitle()).toEqual("BASE_IDE_Development");
   
  });
  
  it('3. Create Project', function() {
	  	  
	   element(by.xpath("//*[@id='ngb-tab-0-panel']/div/div[1]/div")).click(); 
	   projectName.sendKeys("Project Name Protractor");
	   processName.sendKeys("Process Name Protractor");
	   projectDescription.sendKeys("Added Description using Proctactor");
	   createNewProjectButton.click();
	  
	   //Assertion
	   expect(browser.getTitle()).toEqual("BASE_IDE_Development");
   
  });
  
  it('4. Logoff', function() {
	  
	  logoffButton.click();
	   //Assertion
	  expect(browser.getTitle()).toEqual("BASE_IDE_Development");
  
 });
});