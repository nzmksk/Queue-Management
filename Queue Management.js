// -------------------------------------------------------------------------------------------------------
// PART A - Build Queuing Classes
// -------------------------------------------------------------------------------------------------------
// a) Write 2 classes to implement the following IQueuable interface

// Interface IQueuable {
// adds value to queue and returns new queue
// enqueue(value: string): string[];

// removes item from queue, and returns the item removed
// dequeue(): string;

// returns a list of all the items in the queue
// getQueue(): string[];

// returns the number of items in the queue
// size():number;
// }

// Build your queues ontop of arrays;
// call your classes FIFOQUEUE and LIFOQUEUE (first-in first-out & last-in first-out) queues,
// or QUEUE and STACK, whichever names you prefer.
// -------------------------------------------------------------------------------------------------------

class QUEUE1 {
    // Create an empty list and value properties for each instance of QUEUE
    constructor() {
        this.arrQueue = [];
        this.newNum = 1;
    }

    // Define a method that passes a value to the end of the current active queue and return the new queue
    // If no value is passed to the method, a default value equal to the value property will be used
    enqueue(value = this.newNum) {
        this.arrQueue.push(value);
        if (value == this.newNum) {
            // Increment the value property to the next integer
            this.newNum++;
        }
        return this.arrQueue;
    }

    // Define a method that removes the first item in the current active queue and return the removed item
    dequeue() {
        return this.arrQueue.shift();
    }

    // Define a method that fetches the current active queue
    getQueue() {
        return this.arrQueue;
    }

    // Define a method that returns the size/length of the current active queue
    size() {
        return this.arrQueue.length;
    }
}

class STACK1 {
    // Create an empty list and value properties for each instance of STACK
    constructor() {
        this.arrQueue = [];
        this.newNum = 1;
    }

    // Define a method that passes a value to the end of the current active queue and return the new queue
    // If no value is passed to the method, a default value equal to the value property will be used
    enqueue(value = this.newNum) {
        this.arrQueue.push(value);
        if (value == this.newNum) {
            this.newNum++;
        }
        return this.arrQueue;
    }

    // Define a method that removes the last item in the current active queue and return the removed item
    dequeue() {
        return this.arrQueue.pop();
    }

    // Define a method that fetches the current active queue
    getQueue() {
        return this.arrQueue;
    }

    // Define a method that returns the size/length of the current active queue
    size() {
        return this.arrQueue.length;
    }
}

// -------------------------------------------------------------------------------------------------------
// b) If you’ve written your enqueue and dequeue using array methods,
// how would you rewrite the same functions without using any array methods?
// -------------------------------------------------------------------------------------------------------

class QUEUE2 {
    // The push method of an array object can be rewritten using object length property
    enqueue(value = this.newNum) {
        this.arrQueue[this.arrQueue.length] = value;
        if (value == this.newNum) {
            this.newNum++;
        }
        return this.arrQueue;
    }

    // The shift method of an array object can be rewritten
    // using destructuring assignment with a spread parameter 
    dequeue() {
        let [removedItem, ...arr] = this.arrQueue;
        this.arrQueue = arr;
        return removedItem;
    }
}

class STACK2 {
    // The push method of an array object can be rewritten using object length property
    enqueue(value = this.newNum) {
        this.arrQueue[this.arrQueue.length] = value;
        if (value == this.newNum) {
            this.newNum++;
        }
        return this.arrQueue;
    }
    
    // The pop method of an array object can be rewritten by
    // assigning the last item in the queue to a new variable
    // The length of the array will be reduced by one to remove the last item from the queue
    dequeue() {
        let lastItem = this.arrQueue[this.arrQueue.length - 1];
        this.arrQueue.length = (this.arrQueue.length > 0) ? (this.arrQueue.length - 1) : 0;
        return lastItem;
    }
}

// -------------------------------------------------------------------------------------------------------
// c) Show how you would improve the design of your classes,
// apply various design patterns and techniques as you see fit
// -------------------------------------------------------------------------------------------------------

// Since the properties and methods of the QUEUE and STACK classes are repeating,
// these can be merged together under one parent class.
class QueueManagementSystem {
    constructor() {
        this.arrQueue = [];
        this.newNum = 1;
    }
    enqueue(value = this.newNum) {
        this.arrQueue.push(value);
        if (value == this.newNum) {
            this.newNum++;
        }
        return this.arrQueue;
    }
    getQueue() {
        return this.arrQueue;
    }
    size() {
        return this.arrQueue.length;
    }
}

// All prototypes of the QueueManagementSystem are inherited using extends keyword
class QUEUE extends QueueManagementSystem {
    dequeue() {
        return this.arrQueue.shift();
    }
}

class STACK extends QueueManagementSystem {
    dequeue() {
        return this.arrQueue.pop();
    }
}

// -------------------------------------------------------------------------------------------------------
