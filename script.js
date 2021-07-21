console.log(customers)

const outputDiv = document.getElementById('root')

populateCustomerCard(customers);

function populateCustomerCard(customers){
    for (i = 0; i < customers.length; i++){
        if (customers[i] !== undefined){
            //Set up div to contain the following customer cards
            const customerCard = document.createElement('div')
            customerCard.classList.add('customer-card')
            outputDiv.appendChild(customerCard)

            //output picture 
            const customerPic = document.createElement('img')
            customerPic.src = customers[i].picture.large
            customerCard.appendChild(customerPic)

            //get first and last name for each customer
            const fullNameHeader = document.createElement('h1')
            const fullName = customers[i].name.first + ' ' + customers[i].name.last

            //reformat first and last name to capitalize first letters 
            const nameToString = String(fullName)
            const words = nameToString.split(' ')
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1)
            }
            words.join(' ')
            fullNameHeader.innerText = words.join(' ')
            customerCard.appendChild(fullNameHeader)

            //create email as a link
            const customerEmail = document.createElement('a')
            const link = document.createTextNode(customers[i].email)
            customerEmail.appendChild(link)
            customerEmail.href = customers[i].email
            customerEmail.target = "_blank"
            customerCard.appendChild(customerEmail)

            //make address lines 1 and 2
            const customerAddress1 = document.createElement('address')
            customerAddress1.innerText = customers[i].location.street.number + ' ' + customers[i].location.street.name
            customerCard.appendChild(customerAddress1)

            const customerAddress2 = document.createElement('address')
            customerAddress2.innerText = customers[i].location.city + ', ' + nameToAbbr(customers[i].location.state) + ' ' + customers[i].location.postcode
            customerCard.appendChild(customerAddress2)

            //calls birthday
            const customerBirthday = document.createElement('div')
            customerBirthday.innerText = 'DOB: ' + moment(customers[i].dob.date).format("MMM Do, YYYY");
            customerCard.appendChild(customerBirthday)

            //calls 'customer since' date
            const customerSince = document.createElement('div')
            customerSince.innerText = 'Customer since: ' + moment(customers[i].registered.date).format("MMM Do, YYYY");
            customerCard.appendChild(customerSince)

        }
    }
}


