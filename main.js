let text = document.getElementsByClassName('content')[0]

let currText = text.innerHTML.split('')
let cyphrSymbols = '!#^&*-=/|+<>?qwertyuiop[]asdfghjkl;zxcvbnm,./'
console.log(cyphrSymbols.split(''));
text.innerHTML = null
currText.map( (el, index) => text.appendChild(document.createElement('span')).id = index)

const textCyphr = (currText, cyphrSymbols) => {
    let letterPosition = currText.map(() => false)
    console.log(letterPosition);
    let isEnded = false
    for(let i = 0; i < currText.length; i++){
        let interval
        let chance = 1
        interval = setInterval(() => {
            if(Math.random()*chance > Math.random()*200 ){
                text.children[i].innerHTML = currText[i]    
                text.children[i].className = 'right__letter'
                letterPosition[i] = true
                if(letterPosition.indexOf(false) === -1) {
                    isEnded = true
                    setTimeout(() => {
                        text.innerHTML = 'access approved'
                        text.classList.add('content__away')
                    }, 1000)
                }
                clearInterval(interval)
            }else{
                text.children[i].innerHTML = cyphrSymbols[Math.floor((Math.random()*cyphrSymbols.length ))]
                text.children[i].className = 'wrong__letter'
                chance++
            }
        }, Math.random()*400)   
    }
}

textCyphr(currText, cyphrSymbols)