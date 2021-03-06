class Node {
    constructor( data=null ) {
        this.data = data
        this.next = null
    };
};

class SLL {
    constructor() {
        this.head = null
    };

    // ================= 01-fronts
    front() {
        if ( !this.head ) { return null };
        return this.head.data;
    };
    addFront( val ) {
        let newNode = new Node( val );

        if ( !this.head ) {
            this.head = newNode;
            return this.head;
        };

        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    };
    removeFront() {
        if ( !this.head ) { return null }
        else if ( !this.head.next ) {
            this.head = null;
            return this.head;
        }

        let temp = this.head.next;
        delete this.head;
        this.head = temp;
        return this.head;
    };
    
    // ================= 02-contains
    contains( value ) {
        if ( !this.head ) { return false; }

        let runner = this.head;
        while ( !runner.next ) {
            if ( runner.data == value ) { return true; }
            runner = runner.next;
        };
        return false;
    };
    
    // ================= 03-length
    length() {
        if ( !this.head ) { return 0; }

        let runner = this.head;
        let length = 0;
        while ( runner ) {
            length++
            runner = runner.next;
        };
        return length;
    };
};

// ================= 01-fronts
const myList = new SLL();

// console.log(myList.front());
myList.addFront( 5 );
// console.log(myList.front());
myList.addFront( 10 );
// console.log(myList.front());
// myList.removeFront();
// console.log(myList.front());

// ================= 02-contains
// console.log( myList.contains( 5 ) );
// console.log( myList.contains( 0 ) );
// console.log( myList.contains( 10 ) );

// ================= 03-length
console.log( myList.length() );
myList.addFront( 15 );
myList.addFront( 20 );
console.log( myList.length() );