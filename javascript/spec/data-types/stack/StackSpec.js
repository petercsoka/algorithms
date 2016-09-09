var Stack = require("../../../data-types/stack/Stack.js")
var LinkedListStack = require("../../../data-types/stack/LinkedListStack.js")
var Storage;

describe("Stack DT", function() {

    function StackTest(DataType){

        var Items = [
            "1st",
            "2nd",
            "3rd",
            "4th",
            "5th",
            "6th"
        ]

        beforeEach(function() {
            Storage = new DataType();
        });

        function addItems(){
            for (var item of Items){
                Storage.push(item);
            }
        }

        it("should have a push method", function(){
            expect(typeof Storage.push).toEqual('function');
        });

        it("should have a pop method", function(){
            expect(typeof Storage.pop).toEqual('function');
        });

        it("should have an isEmpty method", function(){
            expect(typeof Storage.isEmpty).toEqual('function');
        });

        it("should have a size method", function(){
            expect(typeof Storage.size).toEqual('function');
        });

        it("should have a peek method", function(){
            expect(typeof Storage.peek).toEqual('function');
        });

        it("should be able to add item to the stack", function(){
            expect(Storage.size()).toEqual(0);
            expect(Storage.isEmpty()).toBe(true);

            addItems();

            expect(Storage.size()).toEqual(Items.length);
            expect(Storage.isEmpty()).toBe(false);
            expect(Storage.peek()).toEqual(Items[Items.length-1]);
        });

        it("pop should retun the lastly added item", function(){
            addItems();
            expect(Storage.pop()).toEqual(Items[Items.length-1]);
        })

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
            var expected_item = Storage.size() -1;
            for(var item of Storage) {
                expect(item).toEqual(Items[expected_item]);
                expected_item--;
            }
        });
    }

    describe("Normal Stack data type", function(){
        StackTest(Stack);
    })

    describe("Linked list Stack data type", function(){
        StackTest(LinkedListStack);
    })

});
