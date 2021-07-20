console.log(customers)

const outputDiv = document.getElementById('root')

const customerCard = document.createElement('div')
customerCard.classList.add('customer-card')
// customerCard.setAttribute('class', 'customer-card')

const firstName = document.createElement('h1')
firstName.innerText = customers[0].name.first

console.log(firstName)

const lastName = customers[0].name.last
firstName.innerText += ' ' + lastName
customerCard.appendChild(firstName)
outputDiv.appendChild(customerCard)

const customerPic = document.createElement('img')
customerPic.src = customers[0].picture.medium //remember to comeback and change img size when refactoring 

outputDiv.appendChild(customerPic)

const customerEmail = document.createElement('a')
const link = document.createTextNode(customers[0].email)
customerEmail.appendChild(link)
customerEmail.href = customers[0].email
customerEmail.target = "_blank"


// customerEmail.link = customers[0].email

outputDiv.appendChild(customerEmail)

