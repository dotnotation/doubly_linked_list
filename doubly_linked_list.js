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

        if (this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode 
            newNode.prev = this.tail
            this.tail = newNode 
        }
        this.length++
        return this
    }

    pop(){
        // remove last time and return it
        if (!this.head) return undefined

        let current = this.tail 

        if (this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = current.prev 
            this.tail.next = null
            current.prev = null
        }
        length--
        return current
    }

    shift(){
        // remove a node from the beginning 
        if (!this.head) return undefined
        
        let oldHead = this.head
        
        if (this.length === 1){
            this.head = null
            this.head = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }

    unshift(val){
        // add node to the beginning of the linked list
        let newNode = new Node(val)

        if (this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head 
            this.head = newNode
        }
        this.length++ 
        return this
    }
}