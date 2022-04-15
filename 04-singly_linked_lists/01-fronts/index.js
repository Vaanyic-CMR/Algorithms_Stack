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
};

// ================= 01-fronts
const myList = new SLL();

console.log(myList.front());
myList.addFront( 5 );
console.log(myList.front());
myList.addFront( 10 );
console.log(myList.front());
myList.removeFront();
console.log(myList.front());