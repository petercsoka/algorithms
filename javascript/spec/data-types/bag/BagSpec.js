var Bag = require("../../../data-types/bag/Bag.js")
var Storage;

describe("Bag DT", function() {

    beforeEach(function() {
        Storage = new Bag();
    });

    it("should have add method", function(){
        expect(typeof Storage.add).toEqual('function');
    });

    it("should not have a remove or pop method", function(){
        expect(typeof Storage.remove).toEqual('undefined');
        expect(typeof Storage.pop).toEqual('undefined');
    });

    it("should have isEmpty method", function(){
        expect(typeof Storage.isEmpty).toEqual('function');
    });

    it("should have size method", function(){
        expect(typeof Storage.size).toEqual('function');
    });

    it("should be able to add item to the bag", function(){
        Storage.add("Hello");
        expect(Storage.size()).toEqual(1);
        expect(Storage.isEmpty()).toBe(false);
        expect(Storage.bag[0]).toBe("Hello");
    });

    it("should be return the right bag size", function(){
        Storage.add("a");
        Storage.add("b");
        Storage.add("c");
        Storage.add("d");
        Storage.add("e");
        Storage.add("f");
        expect(Storage.size()).toEqual(6);
    });

    it("should be detect if the bag is empty", function(){
        expect(Storage.isEmpty()).toBe(true);
    });

    it("should be detect if the bag is not empty", function(){
        Storage.add("a");
        expect(Storage.isEmpty()).toBe(false);
    });

    it("should be iterable", function(){
        Storage.add(1);
        Storage.add(2);
        Storage.add(3);
        var expected_item = 1;
        for(var item of Storage) {
            expect(item).toEqual(expected_item);
            expected_item++;
        }
    });

});
