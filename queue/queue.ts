type QNode<T> = {
    value:T,
    next?:QNode<T>,
}

class Queue<T> {
    private head?:QNode<T>;
    private tail?:QNode<T>;

    public length = 0;

    constructor(){}

    enqueue(item:T){}
    dequeue():T| undefined{
        return undefined;
    }
    peek():T| undefined{
        return undefined;
    }
}
