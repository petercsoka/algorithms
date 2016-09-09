function Stack()
{
    this.storage = [];
}

Stack.prototype.push = function(value)
{
    this.storage.push(value);
};

Stack.prototype.pop = function()
{
    return this.storage.pop();
};

Stack.prototype.size = function()
{
    return this.storage.length;
};

Stack.prototype.isEmpty = function()
{
    return this.size() === 0;
};

Stack.prototype.peek = function()
{
    return this.storage[this.storage.length - 1];
}

/**
 * Add custom iterator for easily iterate thorugh the items in the stack
 *
 * Usage:
 * for(var item of stack) {
 *     console.log(item);
 * }
 */
Stack.prototype[Symbol.iterator] = function()
{
    var self = this;
    var index = self.size()-1;
    return {
        next: function(){
            var value = self.storage[index];
            var done = index >= 0;
            index--;
            return { value, done };
        }
    };
}

module.exports = Stack;
