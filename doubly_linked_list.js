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

    get(idx){
        // access a node by index
        if (idx < 0 || idx >= this.length) return null
        if (idx <= this.length % 2){
            let count = 0
            let current = this.head
            while (count !== idx){
                current = current.next
                count++
            }
        } else {
            let count = this.length - 1
            let current = this.tail
            while (count !== idx){
                current = current.prev 
                count--
            }
        }
        return current
    }

    set(idx, val){
        // replace the value of a node at an index
        let foundNode = this.get(idx)

        if (!foundNode){
            return false 
        } else {
            foundNode.val = val
        }
        return true
    }

    insert(idx, val){
        // adding a node at a specific position
        if (idx < 0 || idx > this.length) return false 
        if (idx === 0) return !!this.unshift(val)
        if (idx === this.length) return !!this.push(val)

        let newNode = new Node(val)
        let prevNode = this.get(idx - 1)
        let nextNode = prevNode.next 
        prevNode.next = newNode 
        newNode.next = nextNode
        newNode.prev = prevNode
        this.length++
        return true
    }

    remove(idx){
        if (idx < 0 || idx >= this.length) return undefined
        if (idx === this.length - 1) return this.pop()
        if (idx === 0) return this.shift()

        let foundNode = this.get(idx)
        foundNode.prev.next = foundNode.next 
        foundNode.next.prev = foundNode.prev
        foundNode.next = null
        foundNode.prev = null
        this.length--
        return foundNode
    }

    reverse(){
        let current = this.head 
        this.head = this.tail 
        this.tail = current 
        let prevNode = null
        let nextNode = null 
    
        for (let i = 0; i < this.length; i++){
            nextNode = current.next 
            current.next = prevNode
            prevNode = current 
            current = nextNode
        }
    
        return this
    }
}

// Big O
    // Insertion O(1)
    // Removal O(1) which is better than singly
    // Searching O(n)
    // Access O(n)
    