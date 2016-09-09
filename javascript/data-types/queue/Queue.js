function Queue()
{
    this.storage = [];
}

Queue.prototype.enqueue = function(item)
{
    this.storage.push(item);
}

Queue.prototype.dequeue = function()
{
    return this.storage.shift();
}

Queue.prototype.isEmpty = function()
{
    return this.size() === 0;
}

Queue.prototype.size = function()
{
    return this.storage.length;
}

Queue.prototype.peek = function()
{
    return this.storage[0];
}

/**
 * Add custom iterator for easily iterate thorugh the items in the bag
 *
 * Usage:
 * for(var item of bag) {
 *     console.log(item);
 * }
 */
Queue.prototype[Symbol.iterator] = function()
{
    var self = this;
    var index = 0;
    return {
        next: function(){
            var value = self.storage[index];
            var done = index >= self.size();
            index++;
            return { value, done };
        }
    };
}

module.exports = Queue;
