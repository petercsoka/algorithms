var Stack = require("../../../data-types/stack/Stack.js")
var Storage;

describe("Stack DT", function() {

    beforeEach(function() {
        Storage = new Stack();
    });

    it("should have a push method", function(){
        expect(typeof Storage.push).toEqual('function');
    });

    it("should have a pop method", function(){
        expect(typeof Storage.pop).toEqual('function');
    });

    it("should have an isEmpty method", function(){
        expect(typeof Storage.isEmpty).toEqual('function');
    });

    it("should have size method", function(){
        expect(typeof Storage.size).toEqual('function');
    });

    it("should be able to add item to the bag", function(){

    });

    it("should be return the right bag size", function(){
        Storage.push("a");
        Storage.push("b");
        Storage.push("c");
        Storage.push("d");
        Storage.push("e");
        Storage.push("f");
        expect(Storage.size()).toEqual(6);
    });

    it("should be detect if the bag is empty", function(){
        expect(Storage.isEmpty()).toBe(true);
    });

    it("should be detect if the bag is not empty", function(){
        Storage.push("a");
        expect(Storage.isEmpty()).toBe(false);
    });

    it("should be iterable", function(){
        Storage.push(1);
        Storage.push(2);
        Storage.push(3);
        var expected_item = 1;
        for(var item of Storage) {
            expect(item).toEqual(expected_item);
            expected_item++;
        }
    });

});
