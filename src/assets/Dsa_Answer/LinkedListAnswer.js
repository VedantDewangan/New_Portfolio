export const linked_list_answer = [
    {
    topic: "linked_list",
    question_tag: "arrayToLinkedList",
    heading: "Introduction to Linked List",
    question: "Convert Array To Single Linked List",
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
#include<vector>
using namespace std;

class Node{
    public:
    int data;
    Node* next;

    Node(int x){
        this->data = x;
        this->next = nullptr;
    }
};

Node* convertArrayToSingleLL(vector<int> arr){
    if(arr.size()==0) return nullptr;

    Node* head = new Node(arr[0]);
    Node* temp = head;

    for(int i=1;i<arr.size();i++){
        Node* newNode = new Node(arr[i]);
        temp->next = newNode;
        temp = newNode;
    }

    return head;
}

void print(Node* node){
    while(node){
        cout<<node->data<<" ";
        node = node->next;
    }
}

int main(){
    vector<int> arr = {1,2,3,4,5};
    Node* head = convertArrayToSingleLL(arr);
    print(head);
    return 0;
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(N)"
        }
    ]
},
{
    topic: "linked_list",
    question_tag: "printSingleLL",
    heading: "Print Single Linked List",
    question: "Print the given single linked list",
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
#include<vector>
using namespace std;

class Node{
    public:
    int data;
    Node* next;

    Node(int data){
        this->data = data;
        this->next = nullptr;
    }

    Node(int data, Node* next){
        this->data = data;
        this->next = next;
    }
};

Node* convertArrayToLL(vector<int> arr){
    if(arr.size()==0) return nullptr;

    Node* head = new Node(arr[0]);
    Node* temp = head;

    for(int i=1;i<arr.size();i++){
        Node* newNode = new Node(arr[i]);
        temp->next = newNode;
        temp = newNode;
    }
    return head;
}

void print(Node* head){
    Node* temp = head;
    while(temp){
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}

int main(){
    vector<int> arr = {1,2,3,4,5};
    Node* head = convertArrayToLL(arr);
    print(head);
    return 0;
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "linked_list",
    question_tag: "lengthSingleLL",
    heading: "Length Of Single Linked List",
    question: "Find the length of given linked list",
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
#include<vector>
using namespace std;

class Node{
    public:
    int data;
    Node* next;

    Node(int data){
        this->data = data;
        this->next = nullptr;
    }

    Node(int data, Node* next){
        this->data = data;
        this->next = next;
    }
};

Node* convertArrayToLL(vector<int> arr){
    if(arr.size()==0) return nullptr;

    Node* head = new Node(arr[0]);
    Node* temp = head;

    for(int i=1;i<arr.size();i++){
        Node* newNode = new Node(arr[i]);
        temp->next = newNode;
        temp = newNode;
    }
    return head;
}

void print(Node* head){
    Node* temp = head;
    while(temp){
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}

int length(Node* head){
    int len = 0;
    Node* temp = head;
    while(temp){
        len++;
        temp = temp->next;
    }
    return len;
}

int main(){
    vector<int> arr = {1,2,3,4,5};
    Node* head = convertArrayToLL(arr);
    print(head);
    cout<<"Length of this linkedlist is "<<length(head);
    return 0;
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "linked_list",
    question_tag: "searchInSingleLL",
    heading: "Search Element In Single Linked List",
    question: "Search Element In Single Linked List",
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
#include<vector>
using namespace std;

class Node{
    public:
    int data;
    Node* next;

    Node(int data){
        this->data = data;
        this->next = nullptr;
    }

    Node(int data, Node* next){
        this->data = data;
        this->next = next;
    }
};

Node* convertArrayToLL(vector<int> arr){
    if(arr.size()==0) return nullptr;

    Node* head = new Node(arr[0]);
    Node* temp = head;

    for(int i=1;i<arr.size();i++){
        Node* newNode = new Node(arr[i]);
        temp->next = newNode;
        temp = newNode;
    }
    return head;
}

void print(Node* head){
    Node* temp = head;
    while(temp){
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}

int length(Node* head){
    int len = 0;
    Node* temp = head;
    while(temp){
        len++;
        temp = temp->next;
    }
    return len;
}

int SearchElementInLL(Node* head, int ele){
    Node* temp = head;
    int index = 0;
    while(temp && temp->data!=ele){
        temp = temp->next;
        index++;
    }
    if(!temp) return -1;
    return index;
}

int main(){
    vector<int> arr = {1,2,3,4,5};
    Node* head = convertArrayToLL(arr);
    print(head);
    cout<<SearchElementInLL(head,99);
    return 0;
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "linked_list",
    question_tag: "insertionInSingleLL",
    heading: "Insertion Operation In Single Linked List",
    question: "Insert new Node In Single Linked List",
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include <iostream>
#include <vector>
using namespace std;

class Node {
public:
    int data;
    Node* next;

    Node(int data) {
        this->data = data;
        this->next = nullptr;
    }

    Node(int data, Node* next) {
        this->data = data;
        this->next = next;
    }
};

Node* convertArrayToLL(vector<int> arr) {
    if (arr.size() == 0) return nullptr;

    Node* head = new Node(arr[0]);
    Node* temp = head;

    for (int i = 1; i < arr.size(); i++) {
        Node* newNode = new Node(arr[i]);
        temp->next = newNode;
        temp = newNode;
    }
    return head;
}

void print(Node* node) {
    while (node) {
        cout << node->data << " ";
        node = node->next;
    }
    cout << endl; // For a clean output
}

int length(Node* head) {
    int len = 0;
    Node* temp = head;
    while (temp) {
        temp = temp->next;
        len++;
    }
    return len;
}

Node* InsertAtHead(Node* head, int data) {
    Node* newNode = new Node(data);
    newNode->next = head;
    return newNode;
}

Node* InsertAtTail(Node* head, int data) {
    Node* newNode = new Node(data);
    if (!head) return newNode; // Handle empty list case

    Node* temp = head;
    while (temp->next) {
        temp = temp->next;
    }
    temp->next = newNode;
    return head;
}

Node* InsertAtPosition(Node* head, int data, int pos) {
    if (pos == 1) return InsertAtHead(head, data); // Insert at the head
    if (pos == length(head) + 1) return InsertAtTail(head, data); // Insert at the tail

    Node* newNode = new Node(data);
    Node* temp = head;

    int cnt = 1;
    while (cnt + 1 < pos) {
        temp = temp->next;
        cnt++;
    }

    newNode->next = temp->next;
    temp->next = newNode;
    return head;
}

int main() {
    vector<int> arr = {1, 2, 3, 4, 5};
    Node* head = convertArrayToLL(arr);

    cout << "Original List: ";
    print(head);

    head = InsertAtHead(head, 6);
    cout << "After InsertAtHead(6): ";
    print(head);

    head = InsertAtTail(head, 7);
    cout << "After InsertAtTail(7): ";
    print(head);

    head = InsertAtPosition(head, 99, 3);
    cout << "After InsertAtPosition(99, 3): ";
    print(head);

    return 0;
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "linked_list",
    question_tag: "DeletionInLinkedList",
    heading: "Deletion Operation In Single Linked List",
    question: "Delete Node In Single Linked List",
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
#include<vector>
using namespace std;

class Node{
    public:
    int data;
    Node* next;

    Node(int data){
        this->data = data;
        this->next = nullptr;
    }

    Node(int data, Node* next){
        this->data = data;
        this->next = next;
    }
};

Node* convertArrayToLL(vector<int> arr){
    if(arr.size()==0) return nullptr;

    Node* head = new Node(arr[0]);
    Node* temp = head;

    for(int i=1;i<arr.size();i++){
        Node* newNode = new Node(arr[i]);
        temp->next = newNode;
        temp = newNode;
    }
    return head;
}

void print(Node* head){
    Node* temp = head;
    while(temp){
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}

int length(Node* head){
    int len = 0;
    Node* temp = head;
    while(temp){
        len++;
        temp = temp->next;
    }
    return len;
}

Node* DeleteFromHead(Node* head){
    if(!head) return nullptr;
    if(!(head->next)) return nullptr;
    Node* temp = head;
    temp = temp->next;
    return temp;
}

Node* DeleteFromTail(Node* head){
    if(!head) return nullptr;
    if(!(head->next)) return nullptr;
    Node* temp = head;
    Node* prev = nullptr;
    while(temp->next){
        prev = temp;
        temp = temp->next;
    }
    prev->next = nullptr;
    return head;
}

Node* DeleteFromPos(Node* head, int pos){
    if(pos==1) return DeleteFromHead(head);
    if(pos==length(head)) return DeleteFromTail(head);
    int cnt = 1;
    Node* temp = head;
    Node* prev = nullptr;
    while(cnt<pos){
        cnt++;
        prev = temp;
        temp = temp->next;
    }
    prev->next = temp->next;
    temp->next = nullptr;
    return head;
}

Node* DeleteFromVal(Node* head,int val){
    if(head->data==val) return DeleteFromHead(head);
    Node* temp = head;
    Node* prev = nullptr;
    while(temp && temp->data!=val){
        prev = temp;
        temp = temp->next;
    }
    if(!temp) return head;
    prev->next = temp->next;
    temp->next = nullptr;
    return head;
}

int main(){
    vector<int> arr = {1,2,3,4,5};
    Node* head = convertArrayToLL(arr);
    print(head);
    head = DeleteFromHead(head);
    print(head);
    head = DeleteFromTail(head);
    print(head);
    head = DeleteFromPos(head,3);
    print(head);
    head = DeleteFromVal(head,4);
    print(head);
    return 0;
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "linked_list",
    question_tag: "arrayToDLL",
    heading: "Convert Array To Doubly Linked List",
    question: "Convert Array To Doubly Linked List",
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
#include<vector>
using namespace std;

class Node{
    public:
    int data;
    Node* next;
    Node* back;

    Node(int data){
        this->data = data;
        this->next = nullptr;
        this->back = nullptr;
    }

    Node(int data,Node* next){
        this->data = data;
        this->next = next;
        this->back = nullptr;
    }

    Node(int data, Node* next, Node* back){
        this->data = data;
        this->next = next;
        this->back = back;
    }
};

Node* convertArrayToDLL(vector<int> arr){
    if(arr.size()==0) return nullptr;
    Node* head = new Node(arr[0]);
    Node* temp = head;

    for(int i=1;i<arr.size();i++){
        Node* newNode = new Node(arr[i]);
        newNode->back = temp;
        temp->next = newNode;
        temp = newNode;
    }
    return head;
}

void print(Node* head){
    Node* temp = head;
    while(temp){
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}

int main(){
    vector<int> arr = {1,2,3,4,5};
    Node* head =convertArrayToDLL(arr);
    print(head);
    return 0;
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(N)"
        }
    ]
},
{
    topic: "linked_list",
    question_tag: "printDoublyLL",
    heading: "Print the given Doubly Linked List",
    question: "Print the given Doubly Linked List",
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
#include<vector>
using namespace std;

class Node{
    public:
    int data;
    Node* next;
    Node* back;

    Node(int data){
        this->data = data;
        this->next = nullptr;
        this->back = nullptr;
    }

    Node(int data,Node* next){
        this->data = data;
        this->next = next;
        this->back = nullptr;
    }

    Node(int data, Node* next, Node* back){
        this->data = data;
        this->next = next;
        this->back = back;
    }
};

Node* convertArrayToDLL(vector<int> arr){
    if(arr.size()==0) return nullptr;
    Node* head = new Node(arr[0]);
    Node* temp = head;

    for(int i=1;i<arr.size();i++){
        Node* newNode = new Node(arr[i]);
        newNode->back = temp;
        temp->next = newNode;
        temp = newNode;
    }
    return head;
}

void print(Node* head){
    Node* temp = head;
    while(temp){
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}

int main(){
    vector<int> arr = {1,2,3,4,5};
    Node* head =convertArrayToDLL(arr);
    print(head);
    return 0;
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "linked_list",
    question_tag: "lengthDoublyLL",
    heading: "Length of Doubly Linked List",
    question: "Find the length of Doubly Linked List",
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
#include<vector>
using namespace std;

class Node{
    public:
    int data;
    Node* next;
    Node* back;

    Node(int data){
        this->data = data;
        this->next = nullptr;
        this->back = nullptr;
    }

    Node(int data,Node* next){
        this->data = data;
        this->next = next;
        this->back = nullptr;
    }

    Node(int data, Node* next, Node* back){
        this->data = data;
        this->next = next;
        this->back = back;
    }
};

Node* convertArrayToDLL(vector<int> arr){
    if(arr.size()==0) return nullptr;
    Node* head = new Node(arr[0]);
    Node* temp = head;

    for(int i=1;i<arr.size();i++){
        Node* newNode = new Node(arr[i]);
        newNode->back = temp;
        temp->next = newNode;
        temp = newNode;
    }
    return head;
}

void print(Node* head){
    Node* temp = head;
    while(temp){
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}

int length(Node* head){
    int len = 0;
    Node* temp = head;
    while(temp){
        temp = temp->next;
        len++;
    }
    return len;
}

int main(){
    vector<int> arr = {1,2,3,4,5};
    Node* head =convertArrayToDLL(arr);
    print(head);
    cout<<length(head);
    return 0;
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "linked_list",
    question_tag: "searchInDoublyLL",
    heading: "Search in Doubly Linked List",
    question: "Search the element in Doubly Linked List",
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
#include<vector>
using namespace std;

class Node{
    public:
    int data;
    Node* next;
    Node* back;

    Node(int data){
        this->data = data;
        this->next = nullptr;
        this->back = nullptr;
    }

    Node(int data,Node* next){
        this->data = data;
        this->next = next;
        this->back = nullptr;
    }

    Node(int data, Node* next, Node* back){
        this->data = data;
        this->next = next;
        this->back = back;
    }
};

Node* convertArrayToDLL(vector<int> arr){
    if(arr.size()==0) return nullptr;
    Node* head = new Node(arr[0]);
    Node* temp = head;

    for(int i=1;i<arr.size();i++){
        Node* newNode = new Node(arr[i]);
        newNode->back = temp;
        temp->next = newNode;
        temp = newNode;
    }
    return head;
}

void print(Node* head){
    Node* temp = head;
    while(temp){
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}

int Search(Node* head, int ele){
    int index = 0;
    Node* temp = head;
    while(temp && temp->data!=ele){
        temp = temp->next;
        index++;
    }
    if(!temp) return -1;
    return index;
}

int main(){
    vector<int> arr = {1,2,3,4,5};
    Node* head =convertArrayToDLL(arr);
    print(head);
    cout<<Search(head,99);
    return 0;
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "linked_list",
    question_tag: "insertionInDoublyLL",
    heading: "Insertion Operation In Doubly Linked List",
    question: "Insert New Node In Doubly Linked List",
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
#include<vector>
using namespace std;

class Node{
    public:
    int data;
    Node* next;
    Node* back;

    Node(int x){
        this->data = x;
        this->next = nullptr;
        this->back = nullptr;
    }

    Node(int x, Node* next){
        this->data = x;
        this->next = next;
        this->back = nullptr;
    }

    Node(int x,Node* next, Node* back){
        this->data = x;
        this->next = next;
        this->back = back;
    }
};

Node* convertArrayToDLL(vector<int> arr){
    if(arr.size()==0) return nullptr;
    Node* head = new Node(arr[0]);
    Node* temp = head;
    for(int i=1;i<arr.size();i++){
        Node* newNode = new Node(arr[i]);
        newNode->back = temp;
        temp->next = newNode;
        temp = newNode;
    }
    return head;
}

void print(Node* head){
    Node* temp = head;
    while(temp){
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}
int length(Node* head){
    int len = 0;
    Node* temp = head;
    while(temp){
        temp = temp->next;
        len++;
    }
    return len;
}


Node* InsertAtHead(Node* head, int data){
    Node* newNode = new Node(data);
    Node* temp = head;
    temp->back = newNode;
    newNode->next = temp;
    return newNode;
}

Node* InsertAtTail(Node* head,int data){
    Node* newNode = new Node(data);
    Node* temp = head;
    while(temp->next){
        temp = temp->next;
    }
    temp->next = newNode;
    newNode->back = temp;
    return head;
}

Node* InsertAtPos(Node* head, int data, int pos){
    if(pos==1) return InsertAtHead(head,data);
    if(pos==length(head)+1) return InsertAtTail(head,data);

    int cnt = 1;
    Node* temp = head;
    Node* prev = nullptr;
    while(cnt!=pos){
        prev = temp;
        temp = temp->next;
        cnt++;
    }
    Node* newNode = new Node(data);
    newNode->next = prev->next;
    prev->next = newNode;
    temp->back = newNode;
    newNode->back = prev;
    return head;
}

int main(){
    vector<int> arr = {1,2,3,4,5};
    Node* head = convertArrayToDLL(arr);
    print(head);
    head = InsertAtHead(head,6);
    print(head);
    head = InsertAtTail(head,7);
    print(head);
    head = InsertAtPos(head,8,3);
    print(head);
    return 0;
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "linked_list",
    question_tag: "DeletionInDoublyLinkedList",
    heading: "Deletion Operation In Doubly Linked List",
    question: "Delete Node In Doubly Linked List",
    code: [
        {
            apporach: "Brute/Optimal Approach",
            code: `
#include<iostream>
#include<vector>
using namespace std;

class Node{
    public:
    int data;
    Node* next;
    Node* back;

    Node(int x){
        this->data = x;
        this->next = nullptr;
        this->back = nullptr;
    }

    Node(int x, Node* next){
        this->data = x;
        this->next = next;
        this->back = nullptr;
    }

    Node(int x,Node* next, Node* back){
        this->data = x;
        this->next = next;
        this->back = back;
    }
};

Node* convertArrayToDLL(vector<int> arr){
    if(arr.size()==0) return nullptr;
    Node* head = new Node(arr[0]);
    Node* temp = head;
    for(int i=1;i<arr.size();i++){
        Node* newNode = new Node(arr[i]);
        newNode->back = temp;
        temp->next = newNode;
        temp = newNode;
    }
    return head;
}

void print(Node* head){
    Node* temp = head;
    while(temp){
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}

int length(Node* head){
    int len = 0;
    Node* temp = head;
    while(temp){
        temp = temp->next;
        len++;
    }
    return len;
}

Node* DeleteHead(Node* head){
    Node* temp = head;
    Node* ans = temp->next;
    temp->next->back = nullptr;
    temp->next = nullptr;
    return ans;
}

Node* DeleteTail(Node* head){
    Node* temp = head;
    while(temp->next){
        temp = temp->next;
    }
    temp->back->next = nullptr;
    temp->back = nullptr;
    return head;
}

Node* DeleteFromPos(Node* head, int pos){
    if(pos==1) return DeleteHead(head);
    if(pos==length(head)) return DeleteTail(head);

    int cnt = 1;
    Node* temp = head;
    while(cnt!=pos){
        temp = temp->next;
        cnt++;
    }
    Node* prevNode = temp->back;
    Node* nextNode = temp->next;
    prevNode->next = nextNode;
    nextNode->back = prevNode;
    temp->next = nullptr;
    temp->back = nullptr;
    return head;
}

Node* DeleteFromVal(Node* head, int val){
    Node* temp = head;
    int cnt = 1;
    while(temp && temp->data!=val){
        cnt++;
        temp = temp->next;
    }
    if(!temp) return head;
    if(cnt==1) return DeleteHead(head);
    if(cnt==length(head)) return DeleteTail(head);
    Node* prevNode = temp->back;
    Node* nextNode = temp->next;
    prevNode->next = nextNode;
    nextNode->back = prevNode;
    temp->next = nullptr;
    temp->back = nullptr;
    return head;
}

int main(){
    vector<int> arr = {1,2,3,4,5};
    Node* head = convertArrayToDLL(arr);
    print(head);
    head = DeleteHead(head);
    print(head);
    head = DeleteTail(head);
    print(head);
    head = DeleteFromPos(head,2);
    print(head);
    head = DeleteFromVal(head,15);
    print(head);
    return 0;
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "linked_list",
    question_tag: "ReverseDoublyLinkedList",
    heading: "Reverse the Doubly Linked List",
    question: "Reverse the given Doubly Linked List",
    code: [
        {
            apporach: "Brute Approach",
            code: `
#include<iostream>
#include<vector>
#include<stack>
using namespace std;

class Node{
    public:
    int data;
    Node* next;
    Node* back;

    Node(int data){
        this->data = data;
        this->next = nullptr;
        this->back = nullptr;
    }
};

Node* convertToDLL(vector<int> arr){
    Node* head = new Node(arr[0]);
    Node* temp = head;
    for(int i=1;i<arr.size();i++){
        Node* newNode = new Node(arr[i]);
        newNode->back = temp;
        temp->next = newNode;
        temp = newNode;
    }
    return head;
}

void print(Node* head){
    Node* temp = head;
    while(temp){
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}

int length(Node* head){
    Node* temp = head;
    int cnt = 0;
    while(temp){
        temp = temp->next;
        cnt++;
    }
    return cnt;
}

Node* ReverseUsingStack(Node* head){
    Node* temp1 = head;
    int len = length(head);
    stack<int> st;
    while(temp1){
        st.push(temp1->data);
        temp1 = temp1->next;
    }

    Node* temp2 = head;
    while(temp2){
        temp2->data = st.top();
        st.pop();
        temp2 = temp2->next;
    }
    return head;
}

int main(){
    vector<int> arr = {1,2,3,4,5};
    Node* head = convertToDLL(arr);
    print(head);
    head = ReverseUsingStack(head);
    print(head);
    return 0;
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(N)"
        },
        {
            apporach: "Optimal Approach",
            code: `
#include<iostream>
#include<vector>
#include<stack>
using namespace std;

class Node{
    public:
    int data;
    Node* next;
    Node* back;

    Node(int data){
        this->data = data;
        this->next = nullptr;
        this->back = nullptr;
    }
};

Node* convertToDLL(vector<int> arr){
    Node* head = new Node(arr[0]);
    Node* temp = head;
    for(int i=1;i<arr.size();i++){
        Node* newNode = new Node(arr[i]);
        newNode->back = temp;
        temp->next = newNode;
        temp = newNode;
    }
    return head;
}

void print(Node* head){
    Node* temp = head;
    while(temp){
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}

int length(Node* head){
    Node* temp = head;
    int cnt = 0;
    while(temp){
        temp = temp->next;
        cnt++;
    }
    return cnt;
}

Node* ReverseWithoutUsingStack(Node* head){
    Node* firstNode = head;
    Node* lastNode = head;
    while(lastNode->next){
        lastNode = lastNode->next;
    }
    int len = length(head);
    int cnt = 1;
    while(cnt<=len/2){
        int temp = firstNode->data;
        firstNode->data = lastNode->data;
        lastNode->data = temp;
        cnt++;
        firstNode = firstNode->next;
        lastNode = lastNode->back;
    }
    return head;
}

int main(){
    vector<int> arr = {1,2,3,4,5};
    Node* head = convertToDLL(arr);
    print(head);
    head = ReverseWithoutUsingStack(head);
    print(head);
    return 0;
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)"
        }
    ]
},
{
    topic: "linked_list",
    question_tag: "ReverseLinkedList",
    heading: "Reverse the Linked List",
    question: "Reverse the given Linked List",
    code: [
        {
            apporach: "Brute Approach",
            code: `
#include<iostream>
#include<vector>
#include<stack>
using namespace std;

class Node{
    public:
    int data;
    Node* next;

    Node(int data){
        this->data = data;
        this->next = nullptr;
    }
};

Node* convertArrayToLL(vector<int>arr){
    Node* head = new Node(arr[0]);
    Node* temp = head;

    for(int i=1;i<arr.size();i++){
        Node* newNode = new Node(arr[i]);
        temp->next = newNode;
        temp = newNode;
    }

    return head;
}

void print(Node* head){
    Node* temp = head;
    while (temp){
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}

Node* reverseLL(Node* head){
    stack<int> st;
    Node* temp = head;
    while(temp){
        st.push(temp->data);
        temp = temp->next;
    }
    temp = head;
    while(temp){
        temp->data = st.top();
        st.pop();
        temp = temp->next;
    }
    return head;
}

int main(){
    vector<int> arr = {1,2,3,4,5,6};
    Node* head = convertArrayToLL(arr);
    print(head);
    head = reverseLL(head);
    print(head);
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(N)"
        },
        {
            apporach: "Optimal Approach",
            code: `
#include<iostream>
#include<vector>
#include<stack>
using namespace std;

class Node{
    public:
    int data;
    Node* next;

    Node(int data){
        this->data = data;
        this->next = nullptr;
    }
};

Node* convertArrayToLL(vector<int>arr){
    Node* head = new Node(arr[0]);
    Node* temp = head;

    for(int i=1;i<arr.size();i++){
        Node* newNode = new Node(arr[i]);
        temp->next = newNode;
        temp = newNode;
    }

    return head;
}

void print(Node* head){
    Node* temp = head;
    while (temp){
        cout<<temp->data<<" ";
        temp = temp->next;
    }
    cout<<endl;
}

Node* reverseLL(Node* head){
    Node* temp = head;
    Node* prev = nullptr;
    while(temp){
        Node* front = temp->next;
        temp->next = prev;
        prev = temp;
        temp = front;
    }
    return prev;
}

int main(){
    vector<int> arr = {1,2,3,4,5,6};
    Node* head = convertArrayToLL(arr);
    print(head);
    head = reverseLL(head);
    print(head);
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)"
        },
    ]
},
{
    topic: "linked_list",
    question_tag: "MiddleOfLinkedList",
    heading: "Middle of Linked List",
    question: "Return the middle of given Linked List",
    code: [
        {
            apporach: "Brute Approach",
            code: `
#include<iostream>
#include<vector>
using namespace std;

class Node{
    public:
    int data;
    Node* next;

    Node(int data){
        this->data = data;
        this->next = nullptr;
    }
};

Node* convertArrayToLL(vector<int>arr){
    Node* head = new Node(arr[0]);
    Node* temp = head;

    for(int i=1;i<arr.size();i++){
        Node* newNode = new Node(arr[i]);
        temp->next = newNode;
        temp = newNode;
    }

    return head;
}

Node* middleOfLL(Node* head){
    Node* temp = head;
    int cnt = 0;
    while(temp){
        temp = temp->next;
        cnt++;
    }

    temp = head;
    int x = cnt/2;
    int ptr = 0;
    while(ptr<x){
        ptr++;
        temp = temp->next;
    }
    return temp;
}

int main(){
    vector<int> arr = {1,2,3,4,5,6};
    Node* head = convertArrayToLL(arr);
    Node* ans = middleOfLL(head);
    cout<<ans->data;
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)"
        },
        {
            apporach: "Optimal Approach (Tortoise/Hare Approach)",
            code: `
#include<iostream>
#include<vector>
using namespace std;

class Node{
    public:
    int data;
    Node* next;

    Node(int data){
        this->data = data;
        this->next = nullptr;
    }
};

Node* convertArrayToLL(vector<int>arr){
    Node* head = new Node(arr[0]);
    Node* temp = head;

    for(int i=1;i<arr.size();i++){
        Node* newNode = new Node(arr[i]);
        temp->next = newNode;
        temp = newNode;
    }

    return head;
}

Node* middleOfLL(Node* head){
    Node* temp1 = head;
    Node* temp2 = head;
    while(temp2->next){
        temp1 = temp1->next;
        temp2 = temp2->next;
        if(temp2->next){
            temp2 = temp2->next;
        }
    }
    return temp1;
}

int main(){
    vector<int> arr = {1,2,3,4,5,6};
    Node* head = convertArrayToLL(arr);
    Node* ans = middleOfLL(head);
    cout<<ans->data;
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)"
        },
    ]
},
{
    topic: "linked_list",
    question_tag: "DetectLoopLinkedList",
    heading: "Detect Loop In Linked List",
    question: "Return true if there is the loop in given Linked List other wise, return false",
    code: [
        {
            apporach: "Brute Approach",
            code: `
#include<iostream>
#include<vector>
#include<map>
using namespace std;

class Node{
    public:
    int data;
    Node* next;

    Node(int data){
        this->data = data;
        this->next = nullptr;
    }
};

bool detectLoop(Node* head){
    Node* temp = head;
    map<Node*,int> table;
    while(temp){
        if(table.find(temp)!=table.end()){
            return true;
        }
        else{
            table[temp]++;
            temp = temp->next;
        }
    }
    return false;
}

int main(){
    Node* node1 = new Node(1);
    Node* node2 = new Node(2);
    Node* node3 = new Node(3);
    Node* node4 = new Node(4);
    node1->next = node2;
    node2->next = node3;
    node3->next = node4;
    node4->next = node2;

    cout<<detectLoop(node1);
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(N)"
        },
        {
            apporach: "Optimal Approach (Tortoise/Hare Approach)",
            code: `
#include<iostream>
#include<vector>
#include<map>
using namespace std;

class Node{
    public:
    int data;
    Node* next;

    Node(int data){
        this->data = data;
        this->next = nullptr;
    }
};

bool detectLoop(Node* head){
    Node* slow = head;
    Node* fast = head;
    while(fast && fast->next){
        fast = fast->next->next;
        slow = slow->next;
        if(slow==fast){
            return true;
        }
    }
    return false;
}

int main(){
    Node* node1 = new Node(1);
    Node* node2 = new Node(2);
    Node* node3 = new Node(3);
    Node* node4 = new Node(4);
    node1->next = node2;
    node2->next = node3;
    node3->next = node4;
    node4->next = node2;

    cout<<detectLoop(node1);
}
            `,
            timeComplexity: "O(N)",
            spaceComplexity: "O(1)"
        },
    ]
},

]