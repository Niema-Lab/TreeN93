/*
file to hold an implementation of the Queue data structure
basically copied from https://www.geeksforgeeks.org/implementation-queue-javascript/
*/

class Queue {

  constructor(){
    this.items = [];
  }

  enqueue(e){
    this.items.push(e);
  }

  dequeue(){
    if (this.isEmpty()){
      return null;
    }
    return this.items.shift();
  }

  front(){
    if (this.isEmpty()){
      return null;
    }
    return this.items[0];
  }

  isEmpty(){
    return (this.items.length == 0);
  }

}
