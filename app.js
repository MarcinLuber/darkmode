const btn = document.querySelector('.btn-toggle-color')
const h1 = document.querySelector('h1')
const body = document.body

let count = Number(localStorage.getItem('count'))
console.log(count)
h1.innerText = count




btn.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode')
    h1.innerText = ++count
    
    if (isDarkMode) {
        btn.innerText = 'Turn on light mode'
    } else {
        btn.innerText = 'Turn on dark mode'
    }
    localStorage.setItem('count', String(count))
})

