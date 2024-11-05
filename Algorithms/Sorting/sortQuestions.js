// #1 Sort 10 schools around your house by distance:
// - Insertion sort -> used when data is almost sorted/small data + Space complexity O(n)
// #2 eBay sorts listings by the current Bid amount:
// - Radix or Counting sort -> Fixed length of integers to beat O(n(log(n))) time
// #3 Sort scores on ESPN
// - Quick sort with good pivot point -> Better space complexity than merge sort
// should be alot of scores/memory needed
// #4 Massive database (can't fit all into memory) needs to sort through past year's
// user data
// - Merge sort - Large data, don't want worst time complexity of O(n^2) from quick sort
// #5 Almost sorted Udemy review data needs to update and add 2 new review
// - Insertion sort -> Almost sorted data
// #6 Temperature records for the past 50 years in Canada
// Radix/counting sort if no decimal places for better time complexity
// - Quick sort - so we can do in memory sorting and save up on the space complexity
// #7 Large user name database needs to be sorted. Data is very random.
// - Merge sort - Fast due to divide and conquer, since data is random, maybe
// good pivot point hard to select, also if worried on worst possible time complexity
// or Quick sort - if worried about memory/space complexity
// #8 You want to teach sorting for the first time
// - Bubble sort, Selection sort - simplicity in understanding

// - Merge sort more stable always giving time complexity of O(nlog(n)) by using the divide and conquer method
//  quick sort worst case O(n^2) however better space complexity of O(log(n))
// - Bubble, Insertion and Selection sort has average time complexity of O(n^2) but has
// the best space complexity of O(1). And they are very simple to implement and understand
