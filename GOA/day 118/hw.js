// Step 1: Define the LibraryItem class (Base Class)
class LibraryItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this.isAvailable = true;  // All items are available initially
    }

    borrowItem() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`You have borrowed '${this.title}'.`);
        } else {
            console.log(`'${this.title}' is currently not available for borrowing.`);
        }
    }

    returnItem() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`You have returned '${this.title}'.`);
        } else {
            console.log(`'${this.title}' was not borrowed.`);
        }
    }

    getSummary() {
        return `Title: ${this.title}, Year: ${this.year}`;
    }
}

// Step 2: Define the Book class (Child Class of LibraryItem)
class Book extends LibraryItem {
    constructor(title, year, author, genre) {
        super(title, year);  // Call the parent constructor
        this.author = author;
        this.genre = genre;
    }

    getSummary() {
        const parentSummary = super.getSummary();  // Get the summary from the parent class
        return `${parentSummary}, Author: ${this.author}, Genre: ${this.genre}`;
    }
}

// Step 3: Define the Magazine class (Child Class of LibraryItem)
class Magazine extends LibraryItem {
    constructor(title, year, issueNumber) {
        super(title, year);  // Call the parent constructor
        this.issueNumber = issueNumber;
    }

    getSummary() {
        const parentSummary = super.getSummary();  // Get the summary from the parent class
        return `${parentSummary}, Issue Number: ${this.issueNumber}`;
    }
}

// Step 4: Create instances of Book and Magazine and test the system

// Create instances of Book and Magazine
const book1 = new Book("The Great Gatsby", 1925, "F. Scott Fitzgerald", "Fiction");
const book2 = new Book("To Kill a Mockingbird", 1960, "Harper Lee", "Fiction");

const magazine1 = new Magazine("National Geographic", 2024, 1201);
const magazine2 = new Magazine("Time", 2024, 1553);

// Print summaries of each item
console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(magazine1.getSummary());
console.log(magazine2.getSummary());

// Test borrowing and returning items
console.log("\nAttempting to borrow 'The Great Gatsby':");
book1.borrowItem();  // Should succeed
book1.borrowItem();  // Should show that it's not available

console.log("\nAttempting to return 'The Great Gatsby':");
book1.returnItem();  // Should succeed
book1.returnItem();  // Should show that it wasn't borrowed

console.log("\nAttempting to borrow 'National Geographic':");
magazine1.borrowItem();  // Should succeed
magazine1.borrowItem();  // Should show that it's not available
