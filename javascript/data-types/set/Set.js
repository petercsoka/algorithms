function Set()
{
    this.storage = [];
}

Set.prototype.add = function(item)
{
    if(!this.contains(item)) {
        this.storage.push(item);
    }
};

Set.prototype.remove = function(item)
{
    var index = this.storage.indexOf(item);
    if (~index) {
        this.storage.splice(index, 1);
    }
};

Set.prototype.contains = function(item)
{
    return this.storage.indexOf(item) !== -1;
};

Set.prototype.union = function(set)
{
    var temporarySet = new Set();
    temporarySet.storage = this.storage.slice();

    for(var item of set.storage){
        temporarySet.add(item);
    }

    return temporarySet;
};

Set.prototype.intersect = function(set)
{
    var intersection = new Set();
    for(var item of this.storage){
        if(set.contains(item)){
            intersection.add(item);
        }
    }

    return intersection;
};

Set.prototype.difference = function(set)
{
    var difference = new Set();
    for(var item of this.storage){
        if(!set.contains(item)){
            difference.add(item);
        }
    }

    return difference;
};

Set.prototype.isSubset = function(set)
{
    for(var item of set.storage){
        if(!this.contains(item)){
            return false;
        }
    }
    return true;
};

Set.prototype.length = function()
{
    return this.storage.length;
};

module.exports = Set;
