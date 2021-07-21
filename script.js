console.log(customers)

const outputDiv = document.getElementById('root')

populateCustomerCard(customers);

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
            customerAddress2.innerText = customers[i].location.city + ', ' + nameToAbbr(customers[i].location.state) + ' ' + customers[i].location.postcode
            customerCard.appendChild(customerAddress2)

            const customerBirthday = document.createElement('div')
            customerBirthday.innerText = 'DOB: ' + moment(customers[i].dob.date).format("MMM Do, YYYY");
            customerCard.appendChild(customerBirthday)

            const customerSince = document.createElement('div')
            customerSince.innerText = 'Customer since: ' + moment(customers[i].registered.date).format("MMM Do, YYYY");
            customerCard.appendChild(customerSince)

        }
    }
}


