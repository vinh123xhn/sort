var CArray = function (numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }

    this.setData = function () {
        for (var i = 0; i < this.numElements; i++) {
            this.dataStore[i] = Math.random();
        }
    };

    this.clear = function () {
        for (var i = 0; i < this.dataStore.length; i++) {
            this.dataStore[i] = 0;
        }
    };

    this.insert = function (element) {
        this.dataStore[this.pos] = element;
        this.pos++;
    };

    this.toString = function () {
        var restr = "";
        for (var i = 0; i < this.dataStore.length; i++) {
            restr += this.dataStore[i] + "" + "<br>";
            if (i > 0 && i % 10 == 0) {
                restr += "\n";
            }
        }
        return restr;
    };

    this.swap = function (arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    };

    this.bubbleSort = function () {
        var numElements = this.dataStore.length;
        var temp;
        for (var outer = numElements; outer >= 2; --outer) {
            for (var inner = 0; inner <= outer - 1; ++inner) {
                if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                    this.swap(this.dataStore, inner, inner + 1);
                }
            }
            document.write(this.toString() + "<br>");
        }
    };
};

var myNums = new CArray();
function push() {
    var imports = prompt("nhập số công việc cần làm");
    for (i = 0; i < imports ; i++) {
        var push = prompt("nhập công việc cần thêm");
        myNums.dataStore.push(push);
    }
    myNums.setData();
    myNums.bubbleSort();
    document.write(myNums.toString());
}