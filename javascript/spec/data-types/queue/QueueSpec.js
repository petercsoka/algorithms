var Queue = require("../../../data-types/queue/Queue.js")
var Storage;

describe("Queue DT:", function() {

    function QueueTest(DataType){

        var Items = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f"
        ]

        beforeEach(function() {
            Storage = new DataType();
        });

        function addItems(){
            for (var item of Items){
                Storage.enqueue(item);
            }
        }

        it("should have an enqueue method", function(){
            expect(typeof Storage.enqueue).toEqual('function');
        });

        it("should have a dequeue method", function(){
            expect(typeof Storage.dequeue).toEqual('function');
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

        it("should be able to add item to the queue", function(){
            expect(Storage.size()).toEqual(0);
            expect(Storage.isEmpty()).toBe(true);

            addItems();

            expect(Storage.size()).toEqual(Items.length);
            expect(Storage.isEmpty()).toBe(false);
            expect(Storage.peek()).toEqual(Items[0]);
        });

        it("should dequeue the first item from queue", function(){
            addItems();
            expect(Storage.dequeue()).toEqual(Items[0]);
            expect(Storage.dequeue()).toEqual(Items[1]);
            expect(Storage.dequeue()).toEqual(Items[2]);
        })

        it("should be return the right queue size", function(){
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

        it("peek should return the next item in the queue", function(){
            addItems();
            expect(Storage.peek()).toEqual(Items[0]);
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

    describe("Normal Queue data type:", function(){
        QueueTest(Queue);
    })

    describe("Linked list Queue data type:", function(){

    })

});
