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