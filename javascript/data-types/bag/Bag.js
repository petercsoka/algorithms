function Bag()
{
    this.bag = [];
}

Bag.prototype.add = function(item)
{
    this.bag.push(item);
}

Bag.prototype.isEmpty = function()
{
    return this.bag.length === 0;
}

Bag.prototype.size = function()
{
    return this.bag.length;
}

/**
 * Add custom iterator for easily iterate thorugh the items in the bag
 *
 * Usage:
 * for(var item of bag) {
 *     console.log(item);
 * }
 */
Bag.prototype[Symbol.iterator] = function()
{
    var self = this;
    var index = 0;
    return {
        next: function(){
            var value = self.bag[index];
            var done = index >= self.size();
            index++;
            return { value, done };
        }
    };
}
