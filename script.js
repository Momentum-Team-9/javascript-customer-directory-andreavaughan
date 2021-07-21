console.log(customers)

const outputDiv = document.getElementById('root')

// const customerCard = document.createElement('div')
// customerCard.classList.add('customer-card')
// customerCard.setAttribute('class', 'customer-card')



populateCustomerCard(customers);

//test array object 

// let testCustomers =

//function purpose: to create a div that populates customer information as called

function populateCustomerCard(customers){
    for (i = 0; i < customers.length; i++){
        if (customers[i] !== undefined){
            const customerCard = document.createElement('div')
            customerCard.classList.add('customer-card')
            outputDiv.appendChild(customerCard)
//output picture 
            const customerPic = document.createElement('img')
            customerPic.src = customers[i].picture.large
            customerCard.appendChild(customerPic)

            const firstName = document.createElement('h1')
            firstName.innerText = customers[i].name.first //refactor firstName and lastName to be one variable fullName

            console.log(firstName)

            const lastName = customers[i].name.last
            firstName.innerText += ' ' + lastName
            customerCard.appendChild(firstName)

            const customerEmail = document.createElement('a')
            const link = document.createTextNode(customers[i].email)
            customerEmail.appendChild(link)
            customerEmail.href = customers[i].email
            customerEmail.target = "_blank"

            customerCard.appendChild(customerEmail)

            const customerAddress1 = document.createElement('address')
            customerAddress1.innerText = customers[i].location.street.number + ' ' + customers[i].location.street.name
            customerCard.appendChild(customerAddress1)

            const customerAddress2 = document.createElement('address')
            customerAddress2.innerText = customers[i].location.city + ', ' + customers[i].location.state + ' ' + customers[i].location.postcode
            customerCard.appendChild(customerAddress2)

            const customerBirthday = document.createElement('div')
            customerBirthday.innerText = customers[i].dob.date
            customerCard.appendChild(customerBirthday)

            const customerSince = document.createElement('div')
            customerSince.innerText = customers[i].registered.date
            customerCard.appendChild(customerSince)

        }
    }
}
    
