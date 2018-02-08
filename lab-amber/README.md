# Amber Kim Jest Testing and Map, Reduce, Filter in vanilla JavaScript practice

## For Each
* Takes an array an a callback function.
* This will run the callback function for each of the items in the array and returns a new array with the results of the callback function.

## Map
* This method runs similarly to the forEach function but intead transforms the array contents into a different type.
* It takes an array and a callback funciton.
* It runs the callback function for each of the array elements and returns an array of the results

## Filter
* This method takes an array and a callback function.
* It checks each items in the array using the callback function.
* The callback function should return true or false whether or not the item passes.
* If the item passes and the callback function returns true, it is added to a new array.
* The new array is then returned by Filter.

## Reduce
* This method takes an array of integers, a callback function, and an optional initial state.
* The method takes each items in the array and uses the callback function to reduce it to one integer.
* It returns one integer.