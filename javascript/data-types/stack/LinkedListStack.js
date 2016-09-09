function Node()
{
    this._item = null;
    this._next = null;
}

function LinkedListStack()
{
    this._first = null;
    this._size = 0;
}

LinkedListStack.prototype.push = function(value)
{
    var oldfirst = this._first;
    this._first = new Node();
    this._first._item = value;
    this._first._next = oldfirst;
    this._size++;
};

LinkedListStack.prototype.pop = function()
{
    if (!this.isEmpty()) {
        var item = this._first;
        this._first = this._first._next;
        this._size--;
        return item;
    }
};

LinkedListStack.prototype.size = function()
{
    return this._size;
};

LinkedListStack.prototype.isEmpty = function()
{
    return this._first === 0;
};

LinkedListStack.prototype.peek = function()
{
    return this._first._item;
}

/**
 * Add custom iterator for easily iterate thorugh the items in the Linked List Stack
 *
 * Usage:
 * for(var item of stack) {
 *     console.log(item);
 * }
 */
LinkedListStack.prototype[Symbol.iterator] = function()
{
    var self = this;
    var current = self._first;
    return {
        next: function(){
            var done = current._next == null;
            var value = current._item;
            current = current._next;
            return { value, done };
        }
    };
}

module.exports = LinkedListStack;
