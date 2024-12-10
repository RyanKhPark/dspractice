// Array Chunks

const givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkSize = 3;

function chunkArray(array , chuncksize){
 let chuncked = [];
 let idx = 0;
 
 while (idx < givenArray.length){
	chuncked.push(givenArray.splice(idx, idx+chuncksize))
 }
 console.log(chuncked)
 return chuncked
}

chunkArray(givenArray, chunkSize)

// Two Sums

function twoSums(nums, target) {
    if(nums.length < 1) {
        return;
    }
    const hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        hash[target - nums[i]] = i;
        
        
        if (typeof hash[nums[i]] === "number" ) {
            console.log([hash[nums[i]], i]);
            return [hash[nums[i]], i];
        }
    }
    return [];
}

// Linked List
// Linear data structure, nodes, data && reference

class Node {
	constructor (val, next = null){
  	this.head = val;
    this.next = next;
  }
}

const node = new Node("data");

class LinkedList{
	constructor(){
  	this.head = null;
    this.length = 0;
  }
  
  append(val){
  	const node = new Node(val)
    
    if (this.head === null) {
	    	this.head = node
    } else {
  		let current = this.head;
      console.log("current: ", current)
  		while (current.next !== null) {
  		    current = current.next;
      }
     
    }
    this.length++;
  }
  
}
  
class Node {
   constructor(data) {
       this.data = data;  // value stored in node
       this.next = null;  // reference to next node, initially null
   }
}

class LinkedList {
   constructor() {
       this.head = null;  // start with empty list
   }

   append(data) {
       const newNode = new Node(data); // create new node with data

       if (!this.head) {  // if list is empty
           this.head = newNode; // new node becomes head
           return;
       }

       // if list not empty, traverse to last node
       let current = this.head;
       while (current.next) { // while there's a next node
           current = current.next; // move to next node
       }
       current.next = newNode; // point last node to new node
   }

   // Print the list
   print() {
       let current = this.head;
       while (current) {
           console.log(current.data);
           current = current.next;
       }
   }
}

// Example usage:
const list = new LinkedList();
list.append(10);  // list: 10 -> null
list.append(20);  // list: 10 -> 20 -> null
list.append(30);  // list: 10 -> 20 -> 30 -> null
list.print();     // prints: 10, 20, 30