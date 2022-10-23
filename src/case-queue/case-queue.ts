class QueueNode{
    value: number;
    next: QueueNode | null;

    constructor(value: number){
        this.value = value
        this.next = null;
    }
}

export class Queue{
    first: QueueNode | null;
    last: QueueNode | null;
    size: number = 0;

    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val: number){
        const newNode = new QueueNode(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last!.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;
        const temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}