class Node {
    constructor(data) {
        this.data = data;
        this.tail = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    size() {
        return this.size;
    }
    isEmpty() {
        return this.size === 0;
    }
    //     const newNode = new Node(data);
    //     if(this.isEmpty()){
    //         this.head = newNode;
    //         this.tail = newNode;
    //     }
    //     else{
    //         newNode.next = this.head;
    //         this.head = newNode;
    //     }
    //    this.size++;
    append(data) {
        this.addToTail(data);
    }
    prepend(data) {
        this.addToHead(data);
    }
    head() {
        return this.head;
    }
    tail() {
        return this.tail;
    }
    at(index) {
        if (index < 0 || index >= this.size) {
          return null;
        }
        let current = this.head;
        let count = 0;
        while (count < index) {
          current = current.next;
          count++;
        }
        return current.data;
    }
    contains(value) {
        let current = this.head;
        
        while (current !== null) {
          if (current.data === value) {
            return true;
          }
          
          current = current.next;
        }
        
        return false;
      }
      
      find(value) {
        let current = this.head;
        let index = 0;
        
        while (current !== null) {
          if (current.data === value) {
            return index;
          }
          
          current = current.next;
          index++;
        }
        
        return null;
      }
      addToHead(data) {
        const newNode = new Node(data);
        
        if (this.isEmpty()) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          newNode.next = this.head;
          this.head = newNode;
        }
        
        this.size++;
      }
      addToTail(data) {
        const newNode = new Node(data);
        
        if (this.isEmpty()) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          this.tail.next = newNode;
          this.tail = newNode;
        }
        this.size++;
    }
      toString() {
        let current = this.head;
        let result = '';
        
        while (current !== null) {
          result += `(${current.data}) -> `;
          current = current.next;
        }
        
        result += 'null';
        
        return result;
      }
    }
