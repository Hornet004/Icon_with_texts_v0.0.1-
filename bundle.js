(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const icon_with_texts = require('..')

const iconText = icon_with_texts()

document.body.append(iconText)
},{"..":2}],2:[function(require,module,exports){
module.exports = icon_with_texts

function icon_with_texts (){
    const el = document.createElement('div')
    const shadow = el.attachShadow({mode: 'closed'})

    const img = document.createElement('img')
    //Add your img here below here
    img.src = 'woman-wearing-wireless-earbuds-using-mobile-phone.jpg'
    //Add your style class here
    img.classList.add('img')
    
    const text = document.createElement('p')
    text.innerHTML =  'text element'
    //Add your style class here
    text.classList.add('text')

    const style = document.createElement('style')
    style.textContent = get_theme()

    shadow.append(img, text, style)

    return el;
    
    function get_theme() {
        return`
        .img{
            width: 52px;
            padding: 4px;
            border: 2px solid #eaf1ff;
            height: 52px;
            border-radius: 50%;
        }
        `
    }



}
},{}]},{},[1]);
