// contoh program stack

class StackNode {
    value: number;
    next: StackNode | null;

    constructor(value: number){
        this.value = value;
        this.next = null
    }
}

export class Stack {
    first: StackNode | null;
    last: StackNode | null;
    size: number = 0;

    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val: number){
        var newNode = new StackNode(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            const temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }

        return ++this.size;
    }

    pop(){
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

