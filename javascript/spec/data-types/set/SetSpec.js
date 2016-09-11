var Set = require("../../../data-types/set/Set.js")
var Storage;

describe("Set DT", function() {

    var Items = [
        "1st",
        "2nd",
        "3nd",
        "4th"
    ];

    function addItems(){
        for (var item of Items){
            Storage.add(item);
        }
    }

    beforeEach(function() {
        Storage = new Set();
    });

    it("should have an add method", function(){
        expect(typeof Storage.add).toEqual('function');
    });

    it("should have a remove method", function(){
        expect(typeof Storage.remove).toEqual('function');
    });

    it("should have a contains method", function(){
        expect(typeof Storage.contains).toEqual('function');
    });

    it("should have a union method", function(){
        expect(typeof Storage.union).toEqual('function');
    });

    it("should have an intersect method", function(){
        expect(typeof Storage.intersect).toEqual('function');
    });

    it("should have a difference method", function(){
        expect(typeof Storage.difference).toEqual('function');
    });

    it("should have a length method", function(){
        expect(typeof Storage.length).toEqual('function');
    });

    it("should have an isSubset method", function(){
        expect(typeof Storage.isSubset).toEqual('function');
    });

    it("should be able to add item", function(){
        addItems();
        expect(Storage.contains(Items[Items.length - 1])).toBe(true);
    });

    it("should not add existing element", function(){
        addItems();
        expect(Storage.length()).toBe(Items.length);
        expect(Storage.contains(Items[0])).toBe(true);
        Storage.add(Items[0])
        expect(Storage.length()).toBe(Items.length);
    });

    it("should be able to remove item", function(){
        addItems();
        expect(Storage.length()).toBe(Items.length);
        Storage.remove(Items[0]);
        expect(Storage.contains(Items[0])).toBe(false);
        expect(Storage.length()).toBe(Items.length-1);
    });

    it("should not be able to remove item not in the set", function(){
        addItems();
        expect(Storage.length()).toBe(Items.length);
        Storage.remove("not exists");
        expect(Storage.length()).toBe(Items.length);
    });

    it("union should unite two sets together", function(){
        addItems();
        var new_set = new Set();
        new_set.add("5th");
        var union = Storage.union(new_set);
        expect(union.length()).toBe(Items.length + 1);
        expect(union.contains("5th")).toBe(true);
        expect(union.contains(Items[0])).toBe(true);
    });

    it("intersection should return all items contains both sets", function(){
        addItems();
        var new_set = new Set();
        new_set.add(Items[Items.length-1]);
        new_set.add("5th");
        var intersect = Storage.intersect(new_set);
        expect(intersect.length()).toBe(1);
        expect(intersect.contains("5th")).toBe(false);
        expect(intersect.contains(Items[Items.length-1])).toBe(true);
    });

    it('isSubset should detect that the new set is a proper subset of the original set', function(){
        addItems();

        var new_set = new Set();
        new_set.add(Items[Items.length-1]);
        new_set.add(Items[Items.length-2]);
        new_set.add(Items[Items.length-3]);

        expect(Storage.isSubset(new_set)).toBe(true);
    });

});
