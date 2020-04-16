
// Question 1a) 0(1)
//No matter how many times I try, it will take the same amount of time to ask
//everyone what thier breed of dig is.


// Question 1b) 0(n)
//This is directly proportional to the size. It's smaller the more I ask.



// Question 2)  O(1). 
//It will take the same amount of time no matter the input.


// Question 3) 0(n^2)
//This algorithm requires 2 levels of looping.
//This would be Polynomial Time.


// Question 4) 0(n)
//This is Linear. Each input gets doubled


// Question 5) 0(n)
//Depends on the number of inputs. Still linear.


// Question 6) 0(n^2)
//It's polynomial. Requires 2 nested levels of looping.


// Question 7) 0(n)
// Output is depending on the input. It is linear


// Question 8) O(log n)  
// This attempts to find the index of the item in a sorted array.
// Each time you loop through, you cut the size of the problem in half. 
// Run time increases slowly when larger inputs are used.


// Question 9) O(1)  
// Always takes a certain amount of time to complete. Its random.

// Question 10) 0(n)
// Output is depending on the ivalue of n.


// Question 11) 0(2^n)

const towerOfHanoi = function (disks, startRod, middleRod, endRod){

    if (N == disks){
     return console.log(`${startRod}: to ${endRod}`) // 
    }
    else {
     towerOfHanoi(disks-1, startRod, endRod, middleRod) // 2,'A','C','B' -> 1 A,B,C -> A to C
     towerOfHanoi(1, startRod, middleRod, endRod) // 3 A B C 
     towerOfHanoi(diska-1, middleRod, startRod, endRod)
    }
    
    }
    
    towerOfHanoi(3,'A','B','C') //7 moves
    towerHanoi(3, "A", "B", "C"); // 7 moves
    towerHanoi(4, "A", "B", "C"); // 15 moves
    towerHanoi(5, "A", "B", "C"); // 31 moves

    //Run time for N disks : 
    // 1) 3 = 0.288 seconds
    // 2) 4 = 0.295 seconds 
    // 3) 5 = 0.333 seconds

    // Question 12)

    //1. Counting Sheep

function countingSheep(sheepNum) {
    if(sheepNum === 0){
      return console.log("All sheeps jumped over the fence");
    }
    console.log(`${sheepNum}: Another sheep jumps over the fence`)
    return countingSheep(sheepNum - 1)
  }

  countingSheep(3)


//2. Power Calculator

function calculator(base, exp) {
  if (exp <= 0) {
      return console.log('exp should be >= 0')
  };

  let total = 1;
  for (let i = 1; i <= exp; i++) {
      total = total * base;
  }
  return console.log(total);
}
calculator(10, 2)


//3. Reverse String

function reverseString(string) {
  if (string === "") return console.log("");
  return console.log(reverseString(string.substr(1)) + string.charAt(0))
}
stringReverse("string")


//4. nth Triangular Number

function triNumber(n) {
  if (n <= 1) return n;
  return n + triNumber(n - 1)
} 

console.log(triNumber(5))


//5.  String Splitter

function split(string) {
  if (string === 3) return console.log(string);
  result.push(string.substr(0, 2))
  console.log(result)
  return split(string)
}
split('02/20/2020')


//6. Fibonacci

function fib(n) {
  if (n === 1) return [0, 1];
  let x = fib(n - 1);
  x.push(x[x.length - 1] + x[x.length - 2]);
  return x;
}
console.log(fib(5))


//7. Factorial

function factorial(x) {
  if (x === 0) return 1;
  return x * factorial(x - 1);
}
console.log(factorial(9))


//8. Find a way out of the maze

//9. Find ALL the ways out of the maze

function mazeFind() {
  let mySmallMaze = [
      [' ', ' ', ' '],
      [' ', '*', ' '],
      [' ', ' ', 'e']
  ];
  maze = mySmallMaze;
  console.log(maze.length)



  this.traverse = function (column, row) {
      if (maze[column][row] === 'e') {
          console.log("We solved the maze at (" + column + ", " + row + ")");
      } else if (maze[column][row] === '') {
          console.log("At valid position (" + column + ", " + row + ")");
          maze[column][row] = 2;
          if (column < maze.length - 1) {
              this.traverse(column + 1, row);
          }
          if (row < maze[column].length - 1) {
              this.traverse(column, row + 1);
          }
          if (column > 0) {
              this.traverse(column - 1, row);
          }
          if (row > 0) {
              this.traverse(column, row - 1);
          }
      }
  };

};
mazeFind()


//10. Anagrams

const anagrams = function(prefix, word) {

  if (word.length <= 1) {
      console.log(prefix + word);
  } else {
      for (let i = 0; i < word.length; i++) {
          const nextLetter = word.substring(i, i + 1);
          const before = word.substring(0, i);
          const after = word.substring(i + 1);
          anagrams(prefix + nextLetter, before + after);
      }
  }

}

anagrams('', 'east');


//11. Organization Chart


const organizationChart = function(org, boss) {
  let hierarchy = {};
  org
      .filter(person => person.boss === boss)
      .forEach(person => hierarchy[person.name] = organizationChart(org, person.name))
  return hierarchy;
}



//12. Binary Representation

function binaryRep(num) {
  if (num === 0) {
      return '0';
  }
  const divideNum = Math.floor(num / 2);
  const remainder = num % 2;
  if (divideNum === 0) {
      return `${remainder}`;
  }
  return binaryRep(divideNum) + remainder.toString();
};

console.log(binaryRep(3));
console.log(binaryRep(25));



// 13) 
// 1) Sheep one - proportional to input size so linear time O(n) - number of recursive calls
// 2) Power of - linear time O(n) as the higher the exponent the more recursive calls 
// 3) Reverse String - linear time O(n) as the longer the string the more recursive calls required
// 4) Triangular Number - linear time O(n) higher the triangular input number the more recursive calls required
// 5) String Splitter - Logarithmic time O(log(n)) due to the fact that only recursive calls are
// required for / characters and converting them into , commas - so dependant on specific input 
// 6) Fibonacci - Polynomial time O(n^k) - icreases in size of number (input) will result in
// number of recursive calls to some constant power - in this case 7 to the power of 1.37 
// 7) Factorial - Linear time O(n) size of input is directly proportional to number of recursive calls
// 8) Maze - Polynomial time O(n^k) - increases in size of maze result in number of recursive calls
// to some constant power - in small maze matrix of 9 it  would be approx 1.4
// 9) Anagrams - Exponential time O(2^n) - input size of 4 causes 24 operations so 2.3^n 
// 10) Organizer chart - Linear time O(n)
// 11) Binary - Logarithmic time O (log(n)) - input size is cut in half /2. 



// 14)

//1) Sheep - linear time O(n) - number of operations is directly propotional to input size
//2) Powercalc - linear time O(n) - number of operations is directly proportional to input size
//3) ReverseString - linear time O(n) - number of operations is directly proportional to input size
//4) TriNumber - linear time O(n) - number of operations is directly proportional to input size
//5) StringSplitter - linear time O(n)
//6) Fibonacci - linear time O(n)
//7) Factorial - linear time O(n)








