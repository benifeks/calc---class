// создаём кнопку 

let btn = document.querySelector('button');
btn.textContent = 'показать калькулятор валют';

// калькулятор валют

function calUsd() {

    const inputUah = document.querySelector('#uah');
    inputUah.setAttribute("autocomplete", "off");
    const inputUsd = document.querySelector('#usd');
    inputUsd.setAttribute("autocomplete", "off");
    
    inputUah.addEventListener('input', () => {
        const request = new XMLHttpRequest();
    
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'pars');
        request.send();
    
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                console.log(request.response);
                const data = JSON.parse(request.response);
                inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
            } else {
                inputUsd.value = 'Что-то пошло не так';
            }
            //
            if(inputUah.value === '') {
                inputUsd.value = '';
            }
            //
        });
    
    
        //status
        //statusText
        //response
        //readyState
    });
}
// создаём класс
class Insert {
  constructor(height, width, margin, padding, background, animationDuration, animationName,
    text, parentSelector, qualifier) {

    this.height = height;
    this.width = width;
    this.margin = margin;
    this.padding = padding;
    this.background = background;
    this.animationDuration = animationDuration;
    this.animationName = animationName;
    this.text = text;
    this.parent = document.querySelector(parentSelector);
    this.qualifier = qualifier;
  }
	
  playBack() {
    const element = document.createElement('div');
    element.innerHTML = `${this.text}`;
    this.parent.append(element);
    element.classList.add(`${this.qualifier}`);
    element.style.height = this.height;
    element.style.width = this.width;
    element.style.background = this.background;
    element.style.margin = this.margin;
    element.style.padding = this.padding;
    element.style.animationDuration = this.animationDuration;
    element.style.animationName = this.animationName;
		// *** баловство со стилями...  ***
	element.style.borderRadius = '7px';
	element.style.borderColor = 'black';
  	element.style.borderStyle = 'solid';
	element.style.boxShadow = '5px 5px 10px 1px #000';
    element.style.position = 'absolute';
   
		// ****************************************
		
    btn.textContent = 'скрыть калькулятор валют';
	console.log(element.classList);
    /*****usd********** */
    calUsd();
    /* ****************/
  }
	
  launch() {
    let exam = document.querySelector(`.${this.qualifier}`);
    if (exam == null) {
      readyClass.playBack();
    } else {
      exam.remove();
      btn.textContent = 'показать калькулятор валют';
    }
  }
}
// Подставляем нужные значения ("подъём" через new())

const readyClass = new Insert('70px', '210px', '5px', '10px', 'red', '0.2s', 'slidein',
`<label for="uah">UAH</label>
<input id="uah" type="text"> 
<label for="usd">USD</label> 
<input id="usd" type="text">`, '.container', 'label');

//******************



                         
//******************************  