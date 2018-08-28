function CAarray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.clear = clear;
    this.toString = toString;
    this.setData = setData;
    this.swap = swap;
    for (var i = 0; i< numElements; ++i){
        this.dataStore[i] = i;
    }
    this.insertionSort = insertionSort;
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;

    function setData() {
        for (var i = 0; i < this.numElements; ++i) {
            this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
        }
    }

    function clear() {
        for (i = 0; i < this.dataStore.length; i++){
            this.dataStore[i] = 0;
        }
    }

    function toString() {
        var retstr = '';
        for (i = 0; i < this.dataStore.length; i++){
            retstr += this.dataStore[i] + " ";
            if (0 < i && i % 10 === 0){
                retstr += "<br>";
            }
        }
        return retstr;
    }

    function swap(arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    function selectionSort() {
        var min, temp;
        for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
            min = outer;
            for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
                if (this.dataStore[inner] < this.dataStore[min]) {
                    min = inner;
                }
            }
            swap(this.dataStore, outer, min);
            document.write(this.toString());
        }
    }
    function bubbleSort() {
        var numElements = this.dataStore.length;
        var temp;
        for (var outer = numElements; outer >= 2; --outer) {
            for (var inner = 0; inner <= outer-1; ++inner) {
                if (this.dataStore[inner] > this.dataStore[inner+1]) {
                    swap(this.dataStore, inner, inner+1);
                }
            }
            document.write(this.toString());
        }
    }
    function insertionSort() {
        var temp, inner;
        for (var outer = 1; outer <= this.dataStore.length-1; ++outer) {
            temp = this.dataStore[outer];
            inner = outer;
            while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
                this.dataStore[inner] = this.dataStore[inner-1];
                --inner;
            }
            this.dataStore[inner] = temp;
            document.write(this.toString());
        }
    }

}
var numElements = 2000;
var myNums = new CAarray(numElements);
myNums.setData();
var start = new Date().getTime();
myNums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
start = new Date().getTime();
myNums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
start = new Date().getTime();
myNums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
document.write("Elapsed time for the insertion sort on " + numElements + " elements is: " + elapsed + " milliseconds.");