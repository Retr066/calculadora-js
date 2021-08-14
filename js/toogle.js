export class Toogle{
    constructor(){
        this.view = null;
    }

    setView(view){
        this.view = view;
    }

    changeColor(circle){
        let i = circle.getAttribute('id');
       if(i == 0){
        document.documentElement.style.setProperty('--white-text2', 'rgb(0 0 0)');
        document.documentElement.style.setProperty('--main-color', 'hsl(0, 0%, 90%)');
        document.documentElement.style.setProperty('--darkDesaturated', 'hsl(0, 5%, 81%)');
        document.documentElement.style.setProperty('--screen', 'hsl(0, 0%, 93%)');
        document.documentElement.style.setProperty('--blue', 'hsl(185, 42%, 37%)');
        document.documentElement.style.setProperty('--blueDesaurate', 'hsl(185, 58%, 25%)');
        document.documentElement.style.setProperty('--red', 'hsl(25, 98%, 40%)');
        document.documentElement.style.setProperty('--redDesaturate', 'hsl(25, 99%, 27%)');
        document.documentElement.style.setProperty('--Text', 'hsl(45, 7%, 89%)');
        document.documentElement.style.setProperty('--whiteDesaturate', 'hsl(35, 11%, 61%)');
        document.documentElement.style.setProperty('--white-text', 'hsl(0, 0, 100%)');
        document.documentElement.style.setProperty('--texkey', 'hsl(60, 10%, 19%)');
        circle.style.left = "22px";
        circle.setAttribute('id',1);
      
       }else if(i == 1){
        document.documentElement.style.setProperty('--main-color', 'hsl(268, 75%, 9%)');
        document.documentElement.style.setProperty('--darkDesaturated', 'hsl(268, 71%, 12%)');
        document.documentElement.style.setProperty('--screen', 'hsl(268, 71%, 12%)');
        document.documentElement.style.setProperty('--blue', 'hsl(281, 89%, 26%)');
        document.documentElement.style.setProperty('--blueDesaurate', 'hsl(285, 91%, 52%)');
        document.documentElement.style.setProperty('--red', 'hsl(176, 100%, 44%)');
        document.documentElement.style.setProperty('--redDesaturate', 'hsl(177, 92%, 70%)');
        document.documentElement.style.setProperty('--Text', 'hsl(268, 47%, 21%)');
        document.documentElement.style.setProperty('--whiteDesaturate', 'hsl(290, 70%, 36%)');
        document.documentElement.style.setProperty('--white-text', 'hsl(0, 0, 100%)');
        document.documentElement.style.setProperty('--texkey', 'hsl(52, 100%, 62%)');
        document.documentElement.style.setProperty('--white-text2', 'hsl(52, 100%, 62%)');
        circle.style.left = "44px";
        circle.setAttribute('id',2);
       }else if (i == 2) { 
        document.documentElement.style.setProperty('--main-color', 'hsl(222, 26%, 31%)');
        document.documentElement.style.setProperty('--darkDesaturated', 'hsl(223, 31%, 20%)');
        document.documentElement.style.setProperty('--screen', 'hsl(224, 36%, 15%)');
        document.documentElement.style.setProperty('--blue', 'hsl(225, 21%, 49%)');
        document.documentElement.style.setProperty('--blueDesaurate', 'hsl(224, 28%, 35%)');
        document.documentElement.style.setProperty('--red', 'hsl(6, 63%, 50%)');
        document.documentElement.style.setProperty('--redDesaturate', 'hsl(6, 70%, 34%)');
        document.documentElement.style.setProperty('--Text', 'hsl(221, 14%, 31%)');
        document.documentElement.style.setProperty('--whiteDesaturate', 'hsl(28, 16%, 65%)');
        document.documentElement.style.setProperty('--white-text', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--texkey', 'hsl(221, 14%, 31%)');
        document.documentElement.style.setProperty('--white-text2', 'rgb(255, 255, 255)');
        circle.style.left = "3px";
        circle.setAttribute('id',0);  
       }
    }
  
}