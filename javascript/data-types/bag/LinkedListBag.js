function Node()
{
    this._item = null;
    this._next = null;
}

function LinkedListBag()
{
    this._first = null;
    this._size = 0;
}

LinkedListBag.prototype.add = function(item)
{
    var oldfirst = this._first;
    this._first = new Node();
    this._first._item = item;
    this._first._next = oldfirst;
    this._size++;
}

LinkedListBag.prototype.peek = function()
{
    return this._first._item;
}

LinkedListBag.prototype.isEmpty = function()
{
    return this._first === null;
}

LinkedListBag.prototype.size = function()
{
    return this._size;
}

/**
 * Add custom iterator for easily iterate thorugh the items in the bag
 *
 * Usage:
 * for(var item of bag) {
 *     console.log(item);
 * }
 */
LinkedListBag.prototype[Symbol.iterator] = function()
{
    var current = this._first;
    return {
        next: function(){
            var done = current._next == null;
            var value = current._item;
            current = current._next;
            return { value, done };
        }
    };
}

module.exports = LinkedListBag;
