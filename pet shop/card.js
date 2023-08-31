const getCard = () => {
    const cardInStringify = localStorage.getItem('cart')
    const cards = JSON.parse(cardInStringify)
    console.log('cart', cards)
    const itemsContainer = document.querySelector('.items-container')

    cards.map((card) => {
        const main = document.createElement('div')
        const image = document.createElement('img')
        const title = document.createElement('h1')
        const price = document.createElement('p')
        const counterInput2 = document.createElement('div')
        const minus = document.createElement('button')
        const plus = document.createElement('button')
        const counterInput = document.createElement('div')
        // const description = document.createElement('p')

        main.className = 'items'
        minus.innerHTML = '-'
        plus.innerHTML = '+'
        let arr = []
        plus.onclick = () => {
            console.log('counterInput.innerHTML', counterInput2.innerHTML)
            counterInput2.innerHTML = Number(counterInput2.innerHTML) + 1
            if (localStorage.getItem('cart'))
                arr = JSON.parse(localStorage.getItem('cart'))
            arr.push(counterInput2.innerHTML)
            localStorage.setItem('cart', JSON.stringify(arr))
        }
        minus.onclick = () => {
            if (+counterInput2.innerHTML <= 1) {
                // counterInput2.innerHTML = 0
                // counterInput2.style.color = 'gray'
                const isRemove = confirm('Удалить товар из корзины?')
                console.log('isRemove', isRemove)
                if (isRemove) {
                    minus.disabled = 'true'
                    main.remove()
                }
            } else {
                counterInput2.innerHTML = Number(counterInput2.innerHTML) - 1
                minus.remove = 'disabled'
                counterInput2.style.color = 'black'
            }
            console.log('counterInput.innerHTML', counterInput2.innerHTML)
            counterInput2.innerHTML = Number(counterInput2.innerHTML) - 1
            if (localStorage.getItem('cart'))
                arr = JSON.parse(localStorage.getItem('cart'))
            arr.push(counterInput2.innerHTML)
            localStorage.setItem('cart', JSON.stringify(arr))
        }
        title.innerHTML = card.title
        image.src = card.image
        price.innerHTML = `${card.price} $`
        counterInput2.innerHTML = JSON.stringify(card.count) // + ' ' + 'шт'
        counterInput2.style.border = '2px solid black'
        main.appendChild(image)
        main.appendChild(price)
        // main.appendChild(description)
        main.appendChild(title)
        main.appendChild(counterInput2)
        main.appendChild(counterInput)
        counterInput.appendChild(minus)
        counterInput.appendChild(plus)
        itemsContainer.appendChild(main)
    })
}
getCard()
