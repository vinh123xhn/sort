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
    this.bubbleSort = bubbleSort;

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

}
var numElements = 100;
var myNums = new CAarray(numElements);
myNums.setData();
myNums.bubbleSort();
document.write(myNums.toString());