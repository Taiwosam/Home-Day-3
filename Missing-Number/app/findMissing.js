function findMissing(firstArray, secondArray) {

  // Using the find method, find the first element in either array that is not in the other.
  // Since each array can only be different from the other by 1 element, this is enough.
	var missingNumber1 = firstArray.find((number) => secondArray.indexOf(number) === -1);
  var missingNumber2 = secondArray.find((number) => firstArray.indexOf(number) === -1);

  var missingNumbers = [missingNumber1 || 0, missingNumber2 || 0];

  // If the first element in missingNumbers is zero, just return the second element.
  // Also, if the second element is zero, simply return it.
  if (missingNumbers[0] === 0 || missingNumbers[1] === 0) {
  	return missingNumbers[1];
  }

  return missingNumbers;
}

module.exports = findMissing;
