# Queue-Management
-------------------------------------------------------------------------------------------------------
PART A - Build Queuing Classes
-------------------------------------------------------------------------------------------------------
a) Write 2 classes to implement the following IQueuable interface

Interface IQueuable {
adds value to queue and returns new queue
enqueue(value: string): string[];

removes item from queue, and returns the item removed
dequeue(): string;

returns a list of all the items in the queue
getQueue(): string[];

returns the number of items in the queue
size():number;
}

Build your queues ontop of arrays;
call your classes FIFOQUEUE and LIFOQUEUE (first-in first-out & last-in first-out) queues,
or QUEUE and STACK, whichever names you prefer.
-------------------------------------------------------------------------------------------------------
b) If you’ve written your enqueue and dequeue using array methods,
how would you rewrite the same functions without using any array methods?
-------------------------------------------------------------------------------------------------------
c) Show how you would improve the design of your classes,
apply various design patterns and techniques as you see fit
-------------------------------------------------------------------------------------------------------
