// console.dir(document)

// const my_heading = document.all[10]
// console.log(my_heading)

// my_heading.textContent = 'My Item Lister

// DOM

// 1. Identifier Methods - (5)

// i) getElementById()
// const heading = document.getElementById('page-heading')
// console.log(heading)

// // ii.) getElementsByClassName()
// const listItems = document.getElementsByClassName('list-group-item')
// console.log(listItems)

// // iii.) getElementsByTagName()
// const headingTwo = document.getElementsByTagName('h2')
// console.log(headingTwo)

// // How to change CSS using JS
// for (let i = 0; i < listItems.length; i++) {
//     if (i % 2 === 0) {
//         // CSS properties in camelCasing
//         listItems[i].style.backgroundColor = 'lightgray'
//     }
// }

// // 4. querySelector - id + className + tagName
// const myDiv = document.querySelector('#my-div')
// console.log(myDiv)

// const myHeadingTwo = document.querySelector('.title')
// console.log(myHeadingTwo)

// const list = document.querySelector('ul')
// console.log(list)

// // const listItem = document.querySelector('.list-group-item')
// // console.log(listItem)

// // 5. querySelectorAll()
// const myListItems = document.querySelectorAll('.list-group-item')
// console.log(myListItems)

// const newHeadingTwo = document.querySelectorAll('h2')
// console.log(newHeadingTwo)

// // DOM properties - 

// // textContent
// newHeadingTwo[1].textContent = 'My Items'

// // innerHTML - Appends HTML as a child to the selector
// document.querySelector('#page-heading').innerHTML = '<h3>My Item Lister</h3>'


// EVENTS - User Activity in the application (click, double-click, type etc.)
// SYNTAX - identifierElt.addEventListner('eventName', () => {...})

// document.querySelector('#my-btn').addEventListener('click', () => { console.log('Button got clicked...') })

// const myFunction = () => {
//     console.log('Button was clicked again!')
// }
// document.querySelector('#my-btn').addEventListener('click', myFunction)

// const onFocusHandler = () => {
//     console.log('Text Box was Focused!')
// }
// document.querySelector('#my-text').addEventListener('focus', () => {
//     console.log('Text Box was Focused!')
// })

// document.querySelector('#my-text').addEventListener('blur', () => {
//     console.log('Text Box was Blurred!')
// })

// // document.querySelector('#my-text').addEventListener('keypress', () => {
// //     console.log('Value in the Text Box was Changed!')
// // })

// document.querySelector('#my-text').addEventListener('keyup', () => {
//     console.log('Value in the Text Box was Changed!')
// })

// document.querySelector('#my-btn').addEventListener('dblclick', () => {
//     console.log('Doubled CLick Occured')
// })

// EVENT PARAMETERS - meta-data related to the event
// const someFunction = (param) => {
//     let a = 20
// }
// document.querySelector('#my-text').addEventListener('keydown', (eventParam) => {
//     console.log(eventParam.target.value)
// })

// document.querySelector('#my-btn').addEventListener('click', (e) => {
//     console.log(e)
// })


// DOM TRAVERSALS

// const list = document.querySelector('ul')

// // Children Nodes of the list
// for (let i = 0; i < list.children.length; i++) {
//     if (i % 2 === 0) {
//         list.children[i].style.backgroundColor = 'lightgray'
//     }
// }

// console.log(list.firstChild)        // #text
// console.log(list.firstElementChild)

// console.log(list.lastChild)
// console.log(list.lastElementChild.textContent)


// SIBLINGS

// console.log(document.querySelector('#heading-two').nextElementSibling)
// console.log(document.querySelector('#heading-two').previousElementSibling)

// // PARENT
// console.log(document.querySelector('#heading-two').parentElement)

// console.log(document.querySelector('#my-btn').parentElement.parentElement.parentElement)


// CREATE HTML USING JS ->

// const myDiv = document.createElement('div')
// myDiv.textContent = 'Hey... This is my Div'

// // Define Attributes for any element
// // myDiv.setAttribute('nameOfTheAttribute', 'valueOfTheAttribute')
// myDiv.setAttribute('id', 'my-div')
// myDiv.setAttribute('class', 'my-div-class')
// console.log(myDiv)

// // Remove an attribute from an element
// myDiv.removeAttribute('class')
// console.log(myDiv)

// // Put this in th DOM - innerHTML
// // document.querySelector('#fill-div').innerHTML = myDiv
// document.querySelector('#fill-div').appendChild(myDiv)


// TODO APPLICATION DEMO
// document.querySelector('#my-btn').addEventListener('click', () => {
//     console.log(document.querySelector('#my-text').value)
// })

document.querySelector('#submit-btn').addEventListener('click', (e) => {
    e.preventDefault()
    const textData = document.querySelector('#my-text').value
    // Create a new li
    const li = document.createElement('li')
    li.textContent = textData
    // Give li the class
    li.setAttribute('class', 'list-group-item')
    // Make the li a child to ul
    // document.querySelector('#unordered-list').appendChild(li)
    document.querySelector('#unordered-list').lastElementChild.previousElementSibling.previousElementSibling.appendChild(li)
    // console.log(li)
})