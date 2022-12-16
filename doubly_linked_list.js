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
        if (!this.head) return undefined
        if (this.length === 1){
            this.head = null
            this.head = null
        }

        let oldHead = this.head
        this.head = oldHead.next
        this.head.prev = null
        oldHead.next = null
        length--
        return oldHead
    }
}