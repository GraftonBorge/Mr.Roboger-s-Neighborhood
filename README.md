

# _Mr.Roboger's Neighborhood_

#### _Grafton borge's Week 3 Solo project _

#### By _**Grafton Borge**_

## Technologies Used

* _Git Bash_
* _Github_
* _Visual Studio Code_

## Description

_This is my week three solo project.I need to Create an application that takes a number from a user and returns a range of numbers from 0-5 and the user inputted number 1, 2, and 3 respond "Beep","Boop","Won't you be my neighbor?". While also prioritizing the responses of 3, 2, 1, in that order._

## Setup/Installation Requirements

* _download from github (link below)_
* _clone from repository_
* _open with GUI_
* _need Jquery_

_link to GitHub https://github.com/GraftonBorge/Mr.Roboger-s-Neighborhood.git_
_link to_

## tests

Describe: beepboop()

  Test: When user inputs a # it returns said # in an array 1-#.
  Code: let one = 1;
        let inputedNumber = 10;
        let numberArray = [];
        while(one <= inputedNumber){
          numberArray.push(one++);
        }
  Expected Output: numberArray = [1,2,3,4,5,6,7,8,9,10];

  Test: this will replace 1 with beep.
  code: const numberString = numberArray.join().split("");
        const beepBoopArray = numberString.map(function(element) {
        return element.replace(1, "beep");
        });
  Expected Output: beepBoopArray = [beep,2,3,4,5,6,7,8,9,beep]

  Test: this will replace 1,2,3 with beep,boop,will you be my neighbor.
  Code: const beepBoopArray = numberString.map(function(element) {
	      let beepBoop = {
  	      1: "beep",
          2: "boop",
          3: "will you be my neighbor"
        }
        return element.replace(/1|2|3/gi, function(matched){
  	      return beepBoop[matched];
        });
  Expected Output: beepBoopArray = ["beep","boop","will you be my","4","5","6","7","8","9","beep","0","beep","beep","beep","boop","beep","will you be my","beep","4","beep","5","beep","6","beep","7","beep","8","beep","9","boop","0"]


## Known Bugs

* _ _

## License

_Copyright <2021> <Grafton Borge>_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

End license text.

## Contact Information

_graftonmborge@gmail.com #503-984-9179._