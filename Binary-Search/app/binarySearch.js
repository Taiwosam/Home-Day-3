var exported = [

  Array.prototype.toTwenty = function() {
  	for (var i = 1; i <= 20; i++){
  		this.push(i);
  	}
  	return this;
  },

  Array.prototype.toForty = function() {
  	for (var i = 2; i <= 40; i += 2) {
  		this.push(i);
  	}
  	return this;
  },

  Array.prototype.toOneThousand = function() {
  	for (var i = 10; i <= 1000; i += 10) {
  		this.push(i);
  	}
  	return this;
  },

  Array.prototype.search = function(searchNumber) {

    var firstIndex = 0;
    var lastIndex = this.length - 1;
    var currentIndex;
    var currentNumber;
    var count = 0;

    while (firstIndex <= lastIndex) {

        // Check if our searchNumber is the last element in array. If so, our search is done.
    		if (searchNumber === this[lastIndex]) {
    			return {index: lastIndex, length: this.length, count: count};
    		}

        // Check if our searchNumber is the first element in array. If so, our search is done.
    		else if (searchNumber === this[firstIndex]) {
    			 return {index: firstIndex, length: this.length, count: count};
    		}

        // If not any of the above, split the array in half and pick the middle element, comparing it
        // to searchNumber:
        currentIndex = Math.floor((firstIndex + lastIndex) / 2);
        currentNumber = this[currentIndex];

        if (currentNumber < searchNumber) {
            firstIndex = currentIndex + 1;

            // if currentNumber is less than searchNumber, move to the number next to currentNumber and
            // disregard anything before it and begin the search process again (while loop). But, before you
            // actually start, check if the number next to the start number is the number we're looking for
            if (this[firstIndex + 1] === searchNumber) {
            	 return {index: firstIndex + 1, length: this.length, count: count};
            }
        }

        else if (currentNumber > searchNumber) {
            lastIndex = currentIndex - 1;

            // if currentNumber is less than searchNumber, move to the number before currentNumber and
            // disregard anything after it and begin the search process again (while loop). But, before you
            // actually start, check if the number before the last number is the number we're looking for
            if (this[lastIndex - 1] === searchNumber) {
            	 return {index: lastIndex - 1, length: this.length, count: count};
            }
        }

        // If none of the conditions above is true, that means the middle number, currentNumber, is
        // the number we're looking for
        else {
            return {index: currentIndex, length: this.length, count: count};
        }

        // If none of the conditions above is true, we update the counter variable to reflect that we've tried
        // to locate searchNumber 1 more time
        count += 1;

    }

    return {index: -1, length: this.length, count: count};
}

];

module.exports = exported;
