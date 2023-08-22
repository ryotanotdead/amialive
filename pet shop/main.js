const getAllItems = async () => {
    let result = await fetch('https://fakestoreapi.com/products')
    let responce = await result.json()
    return responce
}
const addAllItems = async (getItems) => {
    const items = await getItems()
    const itemsContainer = document.querySelector('.items-container')
    const counterCard = document.querySelector('#counter')
    console.dir(itemsContainer)
    items.map((item) => {
        const main = document.createElement('div')
        const image = document.createElement('img')
        const title = document.createElement('h1')
        const price = document.createElement('p')
        // const description = document.createElement('p')
        const button = document.createElement('button')

        main.className = 'items'
        title.innerHTML = item.title
        image.src = item.image
        price.innerHTML = `${item.price} $`
        // description.innerHTML = item.description

        button.innerHTML = 'В корзину'
        button.onclick = () => {
            counterCard.innerHTML = +counterCard.innerHTML + 1
        }

        main.appendChild(image)
        main.appendChild(price)
        // main.appendChild(description)
        main.appendChild(title)
        main.appendChild(button)

        itemsContainer.appendChild(main)
    })
}
addAllItems(getAllItems)
let counterVal = 0

function Clique() {
    updateDisplay(++counterVal)
}
onclick = 'Clique()'
