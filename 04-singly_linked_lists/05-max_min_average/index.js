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
        while ( runner ) {
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
    
    // ================= 04-display
    display() {
        if ( !this.head ) { console.log("SLL: | |"); }
        
        let consoleLog = "SLL: |"
        let runner = this.head;
        while ( runner.next ) {
            consoleLog += ` ${runner.data},`
            runner = runner.next;
        };
        consoleLog += ` ${runner.data}`
        consoleLog += " |"
        console.log( consoleLog );
    };
    
    // ================= 05-max_min_average
    max() {
        if ( !this.head ) { return null; }

        let runner = this.head;
        let max = this.head.data;
        while ( runner ) {
            if ( runner.data > max ) { max = runner.data }
            runner = runner.next;
        };
        return max;
    };
    min() {
        if ( !this.head ) { return null; }

        let runner = this.head;
        let min = this.head.data;
        while ( runner ) {
            if ( runner.data < min ) { min = runner.data }
            runner = runner.next;
        };
        return min;
    };
    average() {
        if ( !this.head ) { return null; }

        let runner = this.head;
        let length = 0
        let sum = 0;
        while ( runner ) {
            length++;
            sum += runner.data;
            runner = runner.next;
        };
        return sum / length;
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
// console.log( myList.length() );
myList.addFront( 15 );
myList.addFront( 20 );
// console.log( myList.length() );

// ================= 04-display
myList.display();

// ================= 05-max_min_average
console.log( myList.max() );
console.log( myList.min() );
console.log( myList.average() );