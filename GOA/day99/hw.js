const form = document.querySelector('form');

const accounts = [];

class Account {
    constructor(firstname, lastname, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }

    printDetails() {
        console.log(`Firstname: ${this.firstname}`);
        console.log(`Lastname: ${this.lastname}`);
        console.log(`Email: ${this.email}`);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const email = form.email.value;

    const account = new Account(firstname, lastname, email);
    account.printDetails();
    accounts.push(account);
})

if(form = console.log(`Firstname: ${this.firstname}`));


let firstname = "andria"