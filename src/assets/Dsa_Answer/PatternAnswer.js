export const pattern_answer = [
    {
    topic: "pattern",
    question_tag: "pattern1",
    heading: "Pattern 1",
    question: "Write the code to print the pattern",
    output:`
  *****
  *****
  *****
  *****
  *****
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void rectangle(int n){
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
}

int main(){
    rectangle(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern2",
    heading: "Pattern 2",
    question: "Write the code to print the pattern",
    output:`
  * 
  * * 
  * * * 
  * * * * 
  * * * * * 
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern3",
    heading: "Pattern 3",
    question: "Write the code to print the pattern",
    output:`
  1 
  1 2 
  1 2 3 
  1 2 3 4 
  1 2 3 4 5
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<j<<" ";
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern4",
    heading: "Pattern 4",
    question: "Write the code to print the pattern",
    output:`
  1 
  2 2 
  3 3 3 
  4 4 4 4
  5 5 5 5 5
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<i<<" ";
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern5",
    heading: "Pattern 5",
    question: "Write the code to print the pattern",
    output:`
  * * * * * 
  * * * * 
  * * * 
  * *
  *
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    for(int i=1;i<=5;i++){
        for(int j=1;j<=n-i+1;j++){
            cout<<"* ";
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern6",
    heading: "Pattern 6",
    question: "Write the code to print the pattern",
    output:`
  1 2 3 4 5 
  1 2 3 4 
  1 2 3 
  1 2
  1   
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    for(int i=1;i<=5;i++){
        for(int j=1;j<=n-i+1;j++){
            cout<<j<<" ";
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern7",
    heading: "Pattern 7",
    question: "Write the code to print the pattern",
    output:`
  1 1 1 1 1 
  2 2 2 2 
  3 3 3 
  4 4
  5
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    for(int i=1;i<=5;i++){
        for(int j=1;j<=n-i+1;j++){
            cout<<i<<" ";
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern8",
    heading: "Pattern 8",
    question: "Write the code to print the pattern",
    output:`
    *    
   ***   
  *****  
 *******
*********
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    for(int i=1;i<=5;i++){
        for(int j=1;j<=n-i;j++){
            cout<<" ";
        }
        for(int j=1;j<=2*i-1;j++){
            cout<<"*";
        }
        for(int j=1;j<=n-i;j++){
            cout<<" ";
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern9",
    heading: "Pattern 9",
    question: "Write the code to print the pattern",
    output:`
  *********
   ******* 
    *****  
     ***
      *
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    for(int i=1;i<=5;i++){
        for(int j=1;j<i;j++){
            cout<<" ";
        }
        for(int j=1;j<=2*(n-i)+1;j++){
            cout<<"*";
        }
        for(int j=1;j<i;j++){
            cout<<" ";
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern10",
    heading: "Pattern 10",
    question: "Write the code to print the pattern",
    output:`
     *    
    ***   
   *****  
  *******
 *********
 *********
  *******
   *****
    ***
     *
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    for(int i=1;i<=5;i++){
        for(int j=1;j<=n-i;j++){
            cout<<" ";
        }
        for(int j=1;j<=2*i-1;j++){
            cout<<"*";
        }
        for(int j=1;j<=n-i;j++){
            cout<<" ";
        }
        cout<<endl;
    }
    for(int i=1;i<=5;i++){
        for(int j=1;j<i;j++){
            cout<<" ";
        }
        for(int j=1;j<=2*(n-i)+1;j++){
            cout<<"*";
        }
        for(int j=1;j<i;j++){
            cout<<" ";
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern11",
    heading: "Pattern 11",
    question: "Write the code to print the pattern",
    output:`
  *
  ** 
  ***
  ****
  *****
  ****
  ***
  **
  *
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<"*";
        }
        cout<<endl;
    }
    for(int i=1;i<n;i++){
        for(int j=1;j<=n-i;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern12",
    heading: "Pattern 12",
    question: "Write the code to print the pattern",
    output:` 
  1 
  0 1 
  1 0 1
  0 1 0 1
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    bool one = true;
    for(int i=0;i<n;i++){
        for(int j=0;j<i;j++){
            cout<<(n+i+j+1)%2<<" ";
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern13",
    heading: "Pattern 13",
    question: "Write the code to print the pattern",
    output:`
  1        1
  12      21
  123    321
  1234  4321
  1234554321
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<j;
        }
        for(int j=1;j<=2*(n-i);j++){
            cout<<" ";
        }
        for(int j=i;j>0;j--){
            cout<<j;
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern14",
    heading: "Pattern 14",
    question: "Write the code to print the pattern",
    output:`
  1 
  2 3 
  4 5 6 
  7 8 9 10
  11 12 13 14 15
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    int count = 1;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<count<<" ";
            count++;
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern15",
    heading: "Pattern 15",
    question: "Write the code to print the pattern",
    output:`
  A 
  A B 
  A B C 
  A B C D
  A B C D E
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    char c = 'A';
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<char(c+j-1)<<" ";
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern16",
    heading: "Pattern 16",
    question: "Write the code to print the pattern",
    output:`
  A B C D E 
  A B C D 
  A B C 
  A B
  A
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    char c = 'A';
    for(int i=1;i<=n;i++){
        for(int j=1;j<=(n-i+1);j++){
            cout<<char(c+j-1)<<" ";
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern17",
    heading: "Pattern 17",
    question: "Write the code to print the pattern",
    output:`
  A 
  B B 
  C C C 
  D D D D
  E E E E E
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    int num = 65;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<char(num)<<" ";
        }
        num++;
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern18",
    heading: "Pattern 18",
    question: "Write the code to print the pattern",
    output:`
      A    
     ABA   
    ABCBA  
   ABCDCBA
  ABCDEDCBA
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    for(int i=1;i<=n;i++){
        int num = 65;
        for(int j=1;j<=n-i;j++){
            cout<<" ";
        }
        for(int j=1;j<=i;j++){
            cout<<char(num);
            num++;
        }
        num--;
        for(int j=1;j<i;j++){
            num--;
            cout<<char(num);
        }
        for(int j=1;j<=n-i;j++){
            cout<<" ";
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern19",
    heading: "Pattern 19",
    question: "Write the code to print the pattern",
    output:`
  E  
  D  E  
  C  D  E  
  B  C  D  E
  A  B  C  D  E
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    int num = 65+n;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<char(num+j-2)<<"  ";
        }
        num--;
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern20",
    heading: "Pattern 20",
    question: "Write the code to print the pattern",
    output:`
  **********
  ****  ****
  ***    ***
  **      **
  *        *
  *        *
  **      **
  ***    ***
  ****  ****
  **********
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=(n-i+1);j++){
            cout<<"*";
        }
        for(int j=1;j<i;j++){
            cout<<" ";
        }
        for(int j=1;j<i;j++){
            cout<<" ";
        }
        for(int j=1;j<=(n-i+1);j++){
            cout<<"*";
        }
        cout<<endl;
    }
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<"*";
        }
        for(int j=n;j>i;j--){
            cout<<" ";
        }
        for(int j=n;j>i;j--){
            cout<<" ";
        }
        for(int j=1;j<=i;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern21",
    heading: "Pattern 21",
    question: "Write the code to print the pattern",
    output:`
  *****
  *   *
  *   *
  *   *
  *****
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if(i==1 || j==1 || i==n || j==n){
                cout<<"*";
            }
            else{
                cout<<" ";
            }
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern22",
    heading: "Pattern 22",
    question: "Write the code to print the pattern",
    output:`
  *        *
  **      **
  ***    ***
  ****  ****
  **********
  ****  ****
  ***    ***
  **      **
  *        *
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<"*";
        }
        for(int j=1;j<=n-i;j++){
            cout<<" ";
        }
        for(int j=1;j<=n-i;j++){
            cout<<" ";
        }
        for(int j=1;j<=i;j++){
            cout<<"*";
        }
        cout<<endl;
    }
    for(int i=n-1;i>0;i--){
        for(int j=1;j<=i;j++){
            cout<<"*";
        }
        for(int j=1;j<=n-i;j++){
            cout<<" ";
        }
        for(int j=1;j<=n-i;j++){
            cout<<" ";
        }
        for(int j=1;j<=i;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}

int main(){
    pattern(5);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "pattern",
    question_tag: "pattern23",
    heading: "Pattern 23",
    question: "Write the code to print the pattern",
    output:`
  4 4 4 4 4 4 4 
  4 3 3 3 3 3 4 
  4 3 2 2 2 3 4 
  4 3 2 1 2 3 4
  4 3 2 2 2 3 4
  4 3 3 3 3 3 4
  4 4 4 4 4 4 4
    `,
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
using namespace std;

void pattern(int n){
    for(int i=0;i<2*n-1;i++){
        for(int j=0;j<2*n-1;j++){
            int top = i;
            int left = j;
            int right = (2*n-2)-j;
            int bottom = (2*n-2)-i;
            cout<<n-min(min(top,bottom),min(left,right))<<" ";
        }
        cout<<endl;
    }
}

int main(){
    pattern(4);
    return 0;
}
            `,
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        }
    ]
},
]