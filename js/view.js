export class View {
  constructor() {
    this.screenNumber = document.getElementsByClassName("screen-number");
    this.containerKeypad = document.getElementsByClassName("container__keypad");
    this.screenResult = document.getElementsByClassName('screen-result');
    this.circle = document.getElementsByClassName('circle');
    this.toogle = null;
    this.list = [0];
    this.datos = null;
  }

  render() {
    this.setValues();
    this.runToogle();
    this.screenNumber[0].textContent = this.list[0];
  }
  setToogle(toogle) {
    this.toogle = toogle;
  }
  stringValue() {
    const newValue = this.list.join("");
    this.screenNumber[0].innerHTML = newValue;
  }

  runToogle(){
      const circle = this.circle[0];
      circle.addEventListener("click",()=>{
        this.toogle.changeColor(circle);
    });
  }

  comporeType(value) {
    let newValue;
    if (typeof value === "number") {
      newValue = Math.round((value + Number.EPSILON) * 100) / 100
    } else {
      newValue = value;
    }

    return newValue;
  }

  reset(){
    this.list = [0];
    this.datos = null; 
    this.screenNumber[0].textContent = this.list[0];
    this.screenResult[0].innerHTML = this.datos;
  }

  calculate(list){
    try {
    const newValue = list.join("");
    if(newValue == ''){
        const resul = 0;
        this.screenValues(resul);
      
    }else{
        const resul = eval(newValue);
        this.list = [0];
        this.screenValues(resul);  
    }
    } catch (error) {
        const resul = 'Error algo salio mal'
        this.screenResult[0].innerHTML = resul;
        setTimeout(()=>{
            this.reset();
        },3000)
    }
  }

  screenValues(value) {
    if (this.list.length < 16) {
      if (this.list[0] === 0) {
        let newValue = this.comporeType(value);
        if (!this.list.includes(value)) {
          this.list.splice(0, 1, newValue);
          this.stringValue();
        } else {
          this.list.splice(0, 1, newValue);
          this.stringValue();
        }
      } else {
        let newValue = this.comporeType(value);
        if (!this.list.includes(value)) {
          this.list.push(newValue);
          this.stringValue();
        } else {
          this.list.push(newValue);
          this.stringValue();
        }
      }
    } else {
      this.screenResult[0].innerHTML = "son 16 caracteres maximos";
      setTimeout(()=>{
        this.datos = null; 
        this.screenResult[0].innerHTML = this.datos;
    },3000)
    }
  }

  removeLastIndex() {
    this.list.pop();
    this.stringValue();
  }

  setValues() {
    const container = this.containerKeypad[0].children;
    for (let i = 0; i < container.length; i++) {
      switch (i) {
        case 0:
          let dato0 = container[0];
          dato0.addEventListener("click", () => {
            const value = dato0.textContent;
            this.screenValues(value);
          });
          break;
        case 1:
          let dato1 = container[1];
          dato1.addEventListener("click", () => {
            const value = dato1.textContent;
            this.screenValues(value);
          });
          break;
        case 2:
          let dato2 = container[2];
          dato2.addEventListener("click", () => {
            const value = dato2.textContent;
            this.screenValues(value);
          });
          break;
        case 3:
          let dato3 = container[3];
          dato3.addEventListener("click", () => {
            this.removeLastIndex();
          });
          break;
        case 4:
          let dato4 = container[4];
          dato4.addEventListener("click", () => {
            const value = dato4.textContent;
            this.screenValues(value);
          });
          break;
        case 5:
          let dato5 = container[5];
          dato5.addEventListener("click", () => {
            const value = dato5.textContent;
            this.screenValues(value);
          });
          break;
        case 6:
          let dato6 = container[6];
          dato6.addEventListener("click", () => {
            const value = dato6.textContent;
            this.screenValues(value);
          });
          break;
        case 7:
          let dato7 = container[7];
          dato7.addEventListener("click", () => {
            const value = dato7.textContent;
            this.screenValues(value);
          
          });
          break;
        case 8:
          let dato8 = container[8];
          dato8.addEventListener("click", () => {
            const value = dato8.textContent;
            this.screenValues(value);
          });
          break;
        case 9:
          let dato9 = container[9];
          dato9.addEventListener("click", () => {
            const value = dato9.textContent;
            this.screenValues(value);
          });
          break;
        case 10:
          let dato10 = container[10];
          dato10.addEventListener("click", () => {
            const value = dato10.textContent;
            this.screenValues(value);
          });
          break;
        case 11:
          let dato11 = container[11];
          dato11.addEventListener("click", () => {
            const value = dato11.textContent;
            this.screenValues(value);
          });
          break;
        case 12:
          let dato12 = container[12];
          dato12.addEventListener("click", () => {
            const value = dato12.textContent;
            this.screenValues(value);
          });
          break;
        case 13:
          let dato13 = container[13];
          dato13.addEventListener("click", () => {
            const value = dato13.textContent;
            this.screenValues(value);
          });
          break;
          case 14:
          let dato14 = container[14];
          dato14.addEventListener("click", () => {
            const value = dato14.textContent;
            this.screenValues(value);
          });
          break;
          case 15:
          let dato15 = container[15];
          dato15.addEventListener("click", () => {
            const value = dato15.textContent;
            this.screenValues(value);
          });
          break;
          case 16:
          let dato16 = container[16];
          dato16.addEventListener("click", () => {
            this.reset();
          });
          break;
          case 17:
          let dato17 = container[17];
          dato17.addEventListener("click", () => {
            this.calculate(this.list);
          });
          break;        
        default:
          break;
      }
    }
  }
}
