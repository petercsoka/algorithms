var Queue = require('../queue/Queue.js');

function Node(data)
{
    this._data = data;
    this._children = [];
}

function Tree()
{
    this.root = null;
}

Tree.prototype.add = function(data, toNodeData)
{
    var new_node = new Node(data);
    var parent = toNodeData ? this.findTree(toNodeData) : null;
    if (parent) {
        parent._children.push(new_node);
    } else {
        if(!this.root) {
            this.root = new_node;
        } else {
            return "Root node already assigned";
        }
    }
}

Tree.prototype.remove = function(data)
{
    if (this.root.data == data) {
        return this.root = null;
    }

    var queue = new Queue();
    queue.enqueue(this.root);
    while(!queue.isEmpty()) {
        var node = queue.dequeue();
        for(var i = 0; i < node._children.length; i++) {
            if(node._children[i]._data === data) {
                node._children.splice(i, 1);
            } else {
                queue.enqueue(node._children[i]);
            }
        }
    }
}

Tree.prototype.contains = function(data)
{
    return this.findTree(data) ? true : false;
}

Tree.prototype.findTree = function(data) {
    var queue = new Queue();
    queue.enqueue(this.root);

    while(!queue.isEmpty()) {
        var node = queue.dequeue();

        if(node._data === data) {
            return node;
        }

        for(var i = 0; i < node._children.length; i++) {
            queue.enqueue(node._children[i]);
        }
    }
    return null;
};

Tree.prototype[Symbol.iterator] = function()
{

}

module.exports = Tree;
