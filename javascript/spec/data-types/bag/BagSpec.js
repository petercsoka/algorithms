var Bag = require("../../../data-types/bag/Bag.js");
var LinkedListBag = require("../../../data-types/bag/LinkedListBag.js");
var Storage;

describe("Bag DT", function() {

    function BagTests(BagDataType){

        var Items = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f"
        ]

        beforeEach(function() {
            Storage = new Bag();
        });

        function addItems(){
            for (var item of Items){
                Storage.add(item);
            }
        }

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
            addItems();
            expect(Storage.size()).toEqual(Items.length);
            expect(Storage.isEmpty()).toBe(false);
            expect(Storage.bag[0]).toBe(Items[0]);
        });

        it("should be return the right bag size", function(){
            addItems();
            expect(Storage.size()).toEqual(Items.length);
        });

        it("should be detect if the bag is empty", function(){
            expect(Storage.isEmpty()).toBe(true);
        });

        it("should be detect if the bag is not empty", function(){
            addItems();
            expect(Storage.isEmpty()).toBe(false);
        });

        it("should be iterable", function(){
            addItems();
            var expected_item = 0;
            for(var item of Storage) {
                expect(item).toEqual(Items[expected_item]);
                expected_item++;
            }
        });
    }

    describe("Normal Bag data type", function(){
        BagTests(Bag);
    });

    describe("Linked List Bag data type", function(){
        BagTests(LinkedListBag);
    });
});
