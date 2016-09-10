var Tree = require("../../../data-types/tree/Tree.js");
var Storage;

describe("Tree DT", function() {

    var Items = [
        ["root",null],
        ["dir1","root"],
        ["dir2","root"],
        ["subdir1_dir1","dir1"],
        ["subdir2_dir1","dir1"],
        ["subdir1_dir2","dir2"],
        ["subdir2_dir2","dir2"]
    ]

    beforeEach(function() {
        Storage = new Tree();
    });

    function addItems(){
        for (var item of Items){
            Storage.add(item[0], item[1]);
        }
    }

    it("should have an add method", function(){
        expect(typeof Storage.add).toEqual('function');
    });

    it("should have a remove method", function(){
        expect(typeof Storage.remove).toEqual('function');
    });

    it("should have an contains method", function(){
        expect(typeof Storage.contains).toEqual('function');
    });

    it("should be able to add item to the tree", function() {
        addItems();
        expect(Storage.contains(Items[Items.length - 1][0])).toBe(true);
    });
    it("should be able to remove item from the tree", function() {
        addItems();
        Storage.remove(Items[Items.length - 2][0])
        expect(Storage.contains(Items[Items.length - 2][0])).toBe(false);
    });

});
