// class QUEUE {
//     constructor() {
//         this.arrQueue = [];
//         this.newNum = 1;
//     }
//     enqueue(value = this.newNum) {
//         this.arrQueue.push(value);
//         if (value == this.newNum) {
//             this.newNum++;
//         }
//         return this.arrQueue;
//     }
//     dequeue() {
//         return this.arrQueue.shift();
//     }
//     getQueue() {
//         return this.arrQueue;
//     }
//     size() {
//         return this.arrQueue.length;
//     }
// }

// class STACK {
//     constructor() {
//         this.arrQueue = [];
//         this.newNum = 1;
//     }
//     enqueue(value = this.newNum) {
//         this.arrQueue.push(value);
//         if (value == this.newNum) {
//             this.newNum++;
//         }
//         return this.arrQueue;
//     }
//     dequeue() {
//         return this.arrQueue.pop();
//     }
//     getQueue() {
//         return this.arrQueue;
//     }
//     size() {
//         return this.arrQueue.length;
//     }
// }

// // Question 1b
// class QUEUE2 {
//     constructor() {
//         this.arrQueue = [];
//         this.newNum = 1;
//     }
//     enqueue(value = this.newNum) {
//         this.arrQueue[this.arrQueue.length] = value;
//         if (value == this.newNum) {
//             this.newNum++;
//         }
//         return this.arrQueue;
//     }
//     dequeue() {
//         let [removedItem, ...arr] = this.arrQueue;
//         this.arrQueue = arr;
//         return removedItem;
//     }
// }

// class STACK2 {
//     constructor() {
//         this.arrQueue = [];
//         this.newNum = 1;
//     }
//     enqueue(value = this.newNum) {
//         this.arrQueue[this.arrQueue.length] = value;
//         if (value == this.newNum) {
//             this.newNum++;
//         }
//         return this.arrQueue;
//     }
//     dequeue() {
//         let lastItem = this.arrQueue[this.arrQueue.length - 1];
//         this.arrQueue.length = this.arrQueue.length > 0 ? this.arrQueue.length - 1 : 0;
//         return lastItem;
//     }
// }

// Question 1c
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



let meow = new QUEUE();
console.log(meow instanceof QueueManagementSystem);
console.log(meow instanceof QUEUE);
console.log(Object.getPrototypeOf(meow));
console.log(meow.enqueue());
console.log(meow.dequeue());
console.log(meow.enqueue());
console.log(meow.enqueue(5));
console.log(meow.enqueue());
console.log(meow.dequeue());