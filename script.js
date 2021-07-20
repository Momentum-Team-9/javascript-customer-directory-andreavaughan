console.log(customers)

const outputDiv = document.getElementById('root')

const customerCard = document.createElement('div')
customerCard.classList.add('customer-card')
// customerCard.setAttribute('class', 'customer-card')

outputDiv.appendChild(customerCard)

const firstName = document.createElement('h1')
firstName.innerText = customers[0].name.first //refactor firstName and lastName to be one variable fullName

console.log(firstName)

const lastName = customers[0].name.last
firstName.innerText += ' ' + lastName
customerCard.appendChild(firstName)

const customerPic = document.createElement('img')
customerPic.src = customers[0].picture.medium //remember to comeback and change img size when refactoring 

outputDiv.appendChild(customerPic)

const customerEmail = document.createElement('a')
const link = document.createTextNode(customers[0].email)
customerEmail.appendChild(link)
customerEmail.href = customers[0].email
customerEmail.target = "_blank"

outputDiv.appendChild(customerEmail)

const customerAddress1 = document.createElement('address')
customerAddress1.innerText = customers[0].location.street.number + ' ' + customers[0].location.street.name
outputDiv.appendChild(customerAddress1)

const customerAddress2 = document.createElement('address')
customerAddress2.innerText = customers[0].location.city + ', ' + customers[0].location.state + ' ' + customers[0].location.postcode
outputDiv.appendChild(customerAddress2)

const customerBirthday = document.createElement('div')
customerBirthday.innerText = customers[0].dob.date
outputDiv.appendChild(customerBirthday)

const customerSince = document.createElement('div')
customerSince.innerText = customers[0].registered.date
outputDiv.appendChild(customerSince)

