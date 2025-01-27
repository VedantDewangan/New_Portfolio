import React, { useState } from 'react'
import {motion} from "framer-motion"
import "./Dsa.css"
import CodeEditor from './CodeEditor';
import DSAQuestions from './DSAQuestions';

const arr = [{
    topic: "Binary Search",
    question: "How to implement binary search in C++?",
    code: `
  #include <iostream>
  using namespace std;
  
  int binarySearch(int arr[], int n, int target) {
      int left = 0, right = n - 1;
      while (left <= right) {
          int mid = left + (right - left) / 2; // Prevents overflow
          if (arr[mid] == target) {
              return mid; // Target found
          }
          if (arr[mid] < target) {
              left = mid + 1; // Search in the right half
          } else {
              right = mid - 1; // Search in the left half
          }
      }
      return -1; // Target not found
  }
  
  int main() {
      int arr[] = {1, 3, 5, 7, 9, 11};
      int n = sizeof(arr) / sizeof(arr[0]);
      int target = 7;
      
      int result = binarySearch(arr, n, target);
      if (result != -1) {
          cout << "Element found at index: " << result << endl;
      } else {
          cout << "Element not found." << endl;
      }
      return 0;
  }
    `,
    timeComplexity: "O(log n)"
  }];
  

function Dsa() {

    const [option,SetOption] = useState("question");

  return (
    <>
    <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
          id="Experience"
          className="experience-section"
    >
        <span className="back" onClick={()=>{
          window.history.back()
          }}>
              Go Back
        </span>
        <div className='dsa-question-editor' >
            <div className='dsa-options'>
                <div onClick={()=>{
                    SetOption("question")
                }} style={{
                    backgroundColor:`${option==='question'?'#404040':'#202020'}`
                }}>
                    DSA Question
                </div>
                <div onClick={()=>{
                    SetOption("editor")
                }} style={{
                    backgroundColor:`${option!=='question'?'#404040':'#202020'}`
                }}>
                    Code Editor 
                </div>
            </div>
            <div className='dsa-content'>
                <div style={{
                    display:`${option==='question'?'block':'none'}`
                }}>
                    <div style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        width:"100%",
                        height:"81vh",
                    }}>
                    <DSAQuestions />
                    </div>
                </div>
                <div style={{
                    display:`${option!=='question'?'block':'none'}`
                }}>
                    <CodeEditor />
                </div>
            </div>
        </div>
    </motion.section>
    </>
  )
}

export default Dsa