const html = document.querySelector('html')
const checkbox = document.querySelector('input[name=checkbox-slider]')
 
checkbox.addEventListener('change', () =>{
    html.classList.toggle('dark-mode')
})