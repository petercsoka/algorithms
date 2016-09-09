var Stack = require("../../../data-types/stack/Stack.js")
var LinkedListStack = require("../../../data-types/stack/LinkedListStack.js")
var Storage;

describe("Stack DT", function() {

    function StackTest(DataType){
        beforeEach(function() {
            Storage = new DataType();
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

        it("should have a size method", function(){
            expect(typeof Storage.size).toEqual('function');
        });

        it("should have a peek method", function(){
            expect(typeof Storage.peek).toEqual('function');
        });

        it("should be able to add item to the stack", function(){
            expect(Storage.size()).toEqual(0);
            expect(Storage.isEmpty()).toBe(true);

            Storage.push("Hello");

            expect(Storage.size()).toEqual(1);
            expect(Storage.isEmpty()).toBe(false);
            expect(Storage.peek()).toEqual("Hello");
        });

        it("pop should retun the lastly added item", function(){
            Storage.push("1st");
            Storage.push("2nd");
            Storage.push("3rd");
            expect(Storage.pop()).toEqual("3rd");
        })

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
            var expected_item = Storage.peek();
            for(var item of Storage) {
                expect(item).toEqual(expected_item);
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
