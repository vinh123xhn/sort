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
var numElements = 100;
var myNums = new CAarray(numElements);
myNums.setData();
myNums.insertionSort();
document.write(myNums.toString());