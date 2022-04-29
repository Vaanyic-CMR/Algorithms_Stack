class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    
    add( val, node=this.root ) {
        if (!this.root) { this.root = new BTNode(val); }

        else if (val < node.val && !node.left) { node.left = new BTNode(val); }
        else if (val < node.val && node.left) { this.add(val, node.left); }

        else if (val >= node.val && !node.right) { node.right = new BTNode(val); }
        else if (val >= node.val && node.right) { this.add(val, node.right); }
    }
    contains( val, node=this.root ) {
        if (!node) { return false; }
        
        if (val === node.val) { return true; }
        else if (val < node.val) { return this.contains(val, node.left); }
        else if (val > node.val) { return this.contains(val, node.right); }
    }
    min( node=this.root ) {
        if (!this.root) { return undefined; }

        if (!node.left) { return node.val; }
        else { return this.min(node.left); }
    }
    max( node=this.root ) {
        if (!this.root) { return undefined; }

        if (!node.right) { return node.val; }
        else { return this.max(node.right); }
    }
    size( node=this.root ) {
        if (!node) { return 0; }
        else if (!node.left && !node.right) { return 1 }
        else { return this.size(node.left) + this.size(node.right) + 1; }
    }
    isEmpty() {
        if (!this.root) { return true; }
        else { return false; }
    }
}

const my_tree = new BST();
const my_tree2 = new BST();

my_tree.add(5);
my_tree.add(8);
my_tree.add(2);
my_tree.add(10);
my_tree.add(1);
my_tree.add(4);
my_tree.add(7);

console.log( my_tree.contains(5) );
console.log( my_tree.contains(10) );
console.log( my_tree.contains(3) );
console.log( my_tree.contains(1) );
console.log( my_tree.contains(6) );

console.log( my_tree.min() );
console.log( my_tree.max() );

console.log( my_tree.size() );
console.log( my_tree2.size() );

console.log( my_tree.isEmpty() );
console.log( my_tree2.isEmpty() );