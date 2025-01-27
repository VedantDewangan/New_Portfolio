export const basic_answer = [{
    topic: "basic",
    question_tag: "input-output",
    heading: "Basic way of input and output in C++",
    question: "How to take input and display output in C++?",
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include <iostream>
using namespace std;

int main() {
// Declaring variables
int number;
string name;

// Taking input from user
cout << "Enter your name: ";
cin >> name; // Taking string input
cout << "Enter a number: ";
cin >> number; // Taking integer input

// Displaying output
cout << "Hello, " << name << "!" << endl;
cout << "You entered the number: " << number << endl;

return 0;
}
            `,
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)"
        }
    ]
}]