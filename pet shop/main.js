const getAllItems = async (url) => {
    let result = await fetch(url)
    let responce = await result.json()
    return responce
}
const addItems = async (url) => {
    const items = await getAllItems(url)
    console.log(items)
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
            const cardItems = JSON.parse(localStorage.getItem('cart'))
            console.log(cardItems)
            const firstItemInStore = {
                quantity: 1,
                value: item,
            }
            if (cardItems) {
                let isFindEqual = false
                for (let i = 0; i < cardItems.length; i++) {
                    if (
                        JSON.stringify(cardItems[i].value) ===
                        JSON.stringify(item)
                    ) {
                        cardItems[i].quantity += 1
                        isFindEqual = true
                        break
                    }
                }
                if (!isFindEqual) {
                    cardItems.push(firstItemInStore)
                }
                localStorage.setItem('cart', JSON.stringify(cardItems))
            } else {
                const store = []
                store.push(firstItemInStore)
                localStorage.setItem('cart', JSON.stringify(store))
            }
        }

        main.appendChild(image)
        main.appendChild(price)
        // main.appendChild(description)
        main.appendChild(title)
        main.appendChild(button)

        itemsContainer.appendChild(main)
    })
}
addItems('https://fakestoreapi.com/products')

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

const addAllCategories = async (url) => {
    const categories = await getAllItems(url)
    console.log(categories)

    const categoriesContainer = document.querySelector('.categories-container')
    console.dir(categoriesContainer)
    categories.map((item) => {
        const main = document.createElement('div')
        const filtredCategories = document.createElement('a')

        main.className = 'categories'
        filtredCategories.innerHTML = item
        console.log(item)
        filtredCategories.onclick = () => {
            const itemsContainer = document.querySelector('.items-container')
            removeAllChildNodes(itemsContainer)
            addItems(`https://fakestoreapi.com/products/category/${item}`)
        }
        main.appendChild(filtredCategories)

        categoriesContainer.appendChild(main)
    })
}
addAllCategories('https://fakestoreapi.com/products/categories')

const allCategoriesHandler = () => {
    const itemsContainer = document.querySelector('.items-container')
    removeAllChildNodes(itemsContainer)
    addItems('https://fakestoreapi.com/products')
}
document.querySelector('.allcategoriezz').onclick = allCategoriesHandler
