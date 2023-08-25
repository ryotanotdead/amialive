const getCard = () => {
    const cardInStringify = localStorage.getItem('cart')
    const cards = JSON.parse(cardInStringify)
    console.log('card', cards)
    const filtredCart = cards.reduce((o, i) => {
        if (!o.find((v) => v.id == i.id)) {
            o.push(i)
        }
        return o
    }, [])
    const quantity = cards.reduce(function (o, i) {
        if (!o.hasOwnProperty(i.id)) {
            o[i.id] = 0
        }
        o[i.id]++
        return o
    }, {})

    const res = filtredCart.map((obj) => {
        let id = obj.id.toString()
        if (quantity.hasOwnProperty(id)) {
            return { ...obj, count: quantity[id] }
        } else {
            return obj
        }
    })
    console.log('res', res)

    const itemsContainer = document.querySelector('.items-container')
    res.map((card) => {
        const main = document.createElement('div')
        const image = document.createElement('img')
        const title = document.createElement('h1')
        const price = document.createElement('p')
        const counterInput = document.createElement('div')
        // const description = document.createElement('p')
        main.className = 'items'
        title.innerHTML = card.title
        image.src = card.image
        price.innerHTML = `${card.price} $`
        counterInput.innerHTML = JSON.stringify(card.count) + ' ' + 'шт'
        counterInput.style.border = '2px solid black'
        main.appendChild(image)
        main.appendChild(price)
        // main.appendChild(description)
        main.appendChild(title)
        main.appendChild(counterInput)

        itemsContainer.appendChild(main)
    })
}
getCard()
