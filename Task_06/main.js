class CssClass
{
    constructor(name) {
        this.name = name;
        this.styles = {};
    }
    
    setStyle(property, value){
        this.styles[property] = value;
    }

    removeStyle(property){
        delete this.styles[property];
    }
    
    getCSS(){
        let css = `.${this.name} {\n`;
        for(let property in this.styles){
            css+= ` ${property}: ${this.styles[property]}; \n`;
        }
        css += `}`;
        return css;
    } 
      
}

const Css = new CssClass("my-class");
Css.setStyle("color", "red");
Css.setStyle("font-size", "16px");
console.log(Css.getCSS()); 

Css.removeStyle("font-size");
console.log(Css.getCSS());

class Button{
    constructor(width,height,text){
        this.width = width;
        this.height = height;
        this.text = text;
    }  
    showBtn(){
        document.write(`<button type="button" style = "width:${this.width}px; height:${this.height}px;"> ${this.text} </button>`)
    } 
}

const button = new Button(300,200,"gogg");
button.showBtn();

class BootstrapButton extends Button {
    constructor(width,height,text,color){
        super(width,height,text);
        this.color = color;
    }
    showBtn(){
        document.write(`<button type="button" style = "width:${this.width}px; height:${this.height}px; color:${this.color};"> ${this.text} </button>`)
    } 
}

const button2 = new BootstrapButton(300,200,"gogg","red");
button2.showBtn();

class ExtendedDate extends Date{
    constructor(...args) {
        super(...args);
      }

    ShowDate(){
        let date = { day: "numeric",month:"long"};
        return this.toLocaleDateString("en-US",date); 
    }
    FutureDate() {
        return this > new Date();
    }
    LeapYear() {
        const year = this.getFullYear();
        return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    }
    NextDate(){
        let nextDay = new Date(this.getTime()+24*60*60*1000);
        return nextDay;
    }
}

const myDate = new ExtendedDate("2023-04-12");

console.log(myDate.ShowDate()); 
console.log(myDate.FutureDate());
console.log(myDate.LeapYear());
console.log(myDate.NextDate());
