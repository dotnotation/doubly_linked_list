class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        // add a node to the end of the list
        // create a new node with the val
        // if head is null then head and tail are new node
        // take current tail and set next to be new node
        // take then set .prev to the old tail
        // set tail to be new node

        let newNode = new Node(val)

        if (!head){
            this.head = newNode
            this.tail = newNode
        }

        let oldTail = this.tail
        oldTail.next = newNode 
        newNode.prev = oldTail 
        this.tail = newNode 
        this.length++
        return this
    }
}