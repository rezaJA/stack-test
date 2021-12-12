class Stack<T> {
    private haystack: T[] = [];
    private readonly size: number = 0;

    constructor(size: number = 10) {
        this.size = size;
    }

    public readonly push: (item: T) => void | boolean = (item) => {
        if (this.haystack.length < this.size)
            this.haystack.push(item);
        else
            return false;
    }

    public readonly pop: () => boolean | T = () => {
        if (this.isEmpty())
            return false;
        else
            return this.haystack.pop() as T;
    }

    public readonly top: () => boolean | T = () => {
        if (this.isEmpty())
            return false;
        else
            return this.haystack[(this.haystack.length - 1)] as T;
    }

    public readonly isEmpty: () => boolean = () => {
        return this.haystack.length === 0;
    }
}

export default Stack;