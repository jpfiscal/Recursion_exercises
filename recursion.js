/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length === 0) return 1;
  for (let num of nums){
    if (Array.isArray(num)){
      return product(num) * product(nums.slice(1));
    } else {
      return nums[0] * product(nums.slice(1));
    }
  }
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, currentLongest = 0) {
  if (words.length === 0) return currentLongest;
  
  if (words[0].length > currentLongest) {
    return longest(words.slice(1), words[0].length);
  } else {
    return longest(words.slice(1), currentLongest);
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, newstr="") {
  if(idx === str.length) return newstr;

  if (idx % 2 === 0){
    newstr += str[idx];
  }
  return everyOther(str, idx+1, newstr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=0) {
  if (idx === str.length) return true;

  if (str[idx] != str[str.length-1-idx]){
    return false;
  }else{
    return isPalindrome(str, idx+1);
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if (idx === arr.length) return -1;

  if (arr[idx] == val){
    return idx;
  }else{
    return findIndex(arr,val,idx+1);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str,newstr="",idx=0) {
  if (idx === str.length) return newstr;

  newstr += str[str.length-1-idx];
  return revString(str,newstr,idx+1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr=[]) {
  for (const key in obj){
    if (typeof obj[key] === 'object') arr = gatherStrings(obj[key],arr);
    if (typeof obj[key] === 'string') arr.push(obj[key]);
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low=0, high=arr.length-1) {
  if (low === high && arr[low] != val) return -1;
  midIdx = Math.floor((high-low)/2)+low;
  if (arr[midIdx] == val){
    return midIdx;
  } else if (arr[midIdx] < val){
    return binarySearch(arr, val, midIdx+1, high);
  } else if (arr[midIdx] > val){
    return binarySearch(arr, val, low, midIdx-1);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
