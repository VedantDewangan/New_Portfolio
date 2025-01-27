import React, { useState, useEffect, useRef } from "react";
import "./AIBot.css";
import ai_img from "../../assets/ai-bot.png";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const AIBot = () => {
  const [chatWithBot, setChatWithBot] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, SetLoading] = useState(false);
  const genAI = new GoogleGenerativeAI(
    "AIzaSyBeZJXzlqkU1mkPxsXOfXMxEjfPSqlX3wA"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const messageBoxRef = useRef(null);
  // add leetcode codechef and hackrank and gfg link also
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputMessage.trim() === "") return;
    SetLoading(true);
    setMessages([...messages, { text: inputMessage, sender: "user" }]);
    setInputMessage("");
    const result = await model.generateContent(
      "Hello I am Vedant Dewangan ,I am 20 years old, I am builded the AI chat biot using your API so from now you act as my AI chat bot , i have build you so you are the Vedant AI Bot . This is the information about me  name - Vedant Dewangan , email - vedantdewangan75@gmail.com , phone number - +91 9109436789, instagram link - https://www.instagram.com/vedant_2703/ , github link - https://github.com/VedantDewangan , linkedin link -https://www.linkedin.com/in/vedant-dewangan-844a1825b/ , location right now - raipur , chhattisgarth , India , my education -  class 10th compledted in 2019 to 2020 , with grade 88.6% from kendriya vidhyalaya durg class 12th completd in 2021 to 2022 , with grade 91.8% from kendriya vidhyalaya durg both CBSE currently i am in 6th semester pursing my Btech degree from National Institute of Technology Raipur in Information Technology department  my hoobies - travelling , listning music my skills - i am a full stack web develpoper , i know html css js , i woked but tailwind css ract js node js mongodb mysql, express js i am done with jwt authentication and also work in web socket and firebase , restful api builing , work with variuos framework like mui , ui chakara , right now i am focus on next js and DSA i know compter fundaments like database management system  , operating systenm, object oriendted programming, love to explore new thing and i love to do creavive work on web desgin and want to explre new thing and build a strong network  as i am currently in my college i am not much idea about the MNCs I'm Vedant Dewangan, currently pursuing my B.Tech in Information Technology at the National Institute of Technology Raipur, where I’m in my 5th semester with a CPI of 8.18/10. I love programming, especially in C++, JavaScript, and Python, and I started coding back in 11th grade with python in my high school my Experience - I have received an internship offer from Prodigy InfoTech in the domain of Web Development. i have done the internship remote from Prodigy Infotech June 2024 - July 2024 (1 month) i that internship i was given the 5 task toi compltete 1. Task 1 involved creating an interactive navigation menu that changes color or style when scrolled or hovered over. The menu has a fixed position and is visible on all pages. This task required me to use HTML to structure the menu, CSS to style it, and JavaScript to add interactivity linken in poost link - https://www.linkedin.com/posts/vedant-dewangan-844a1825b_webdevelopment-html-css-activity-7214864929206501376-0LSy?utm_source=share&utm_medium=member_desktop github link -  https://github.com/VedantDewangan/PRODIGY_WD_01 2 task - Task 2 involved building a stopwatch web application using HTML, CSS, and JavaScript. I used Tailwind CSS to create visually appealing circular gradients and simple gradient half-circle shapes. This task required me to implement functions for starting, pausing, and resetting the stopwatch, as well as tracking and displaying lap times. linkedn lik - https://www.linkedin.com/posts/vedant-dewangan-844a1825b_webdevelopment-html-css-activity-7214880280266850305-WMyl?utm_source=share&utm_medium=member_desktop git hub link - https://github.com/VedantDewangan/PRODIGY_WD_02 3 task Task 3 involved building a tic-tac-toe web application using HTML, CSS, and JavaScript and React JS. By implementing functions to handle user clicks, track game state, and check for winning conditions, I created an interactive and engaging tic-tac-toe game. linked link-https://www.linkedin.com/posts/vedant-dewangan-844a1825b_webdevelopment-html-css-activity-7214881661526634497-CWWG?utm_source=share&utm_medium=member_desktop git hub link - https://github.com/VedantDewangan/PRODIGY_WD_03 4 task Task 4 involved building a personal portfolio website that showcases my skills, projects, and accomplishments as a web developer. Using React with Vite and Tailwind CSS, I designed an attractive and visually appealing layout that captures visitors' attention. linkend link - https://www.linkedin.com/posts/vedant-dewangan-844a1825b_webdevelopment-html-css-activity-7214885945274208256-j8Dn?utm_source=share&utm_medium=member_desktop github link-https://github.com/VedantDewangan/PRODIGY_WD_04 5 task Task 5 challenged me to build a web page that fetches weather data from a weather API based on the user's location or inputted location. Using React with Vite and Chakra UI, I created a dynamic interface that displays current weather conditions, temperature, and other relevant information in a user-friendly format. linked link - https://www.linkedin.com/posts/vedant-dewangan-844a1825b_webdevelopment-react-chakraui-activity-7214888458291470336-u3Lh?utm_source=share&utm_medium=member_desktop github link - https://github.com/VedantDewangan/PRODIGY_WD_05 I am excited to share that I have successfully completed a one-month remote internship at Prodigy Infotech as a Web Developer. During this internship, I tackled five distinct tasks, each designed to challenge and enhance my skills. This experience has significantly strengthened my abilities in HTML, CSS, Tailwind CSS, JavaScript, and React with Vite. I am grateful for the opportunity to work on these projects and for the support and guidance provided by the Prodigy Infotech team. Their feedback and encouragement have been invaluable in my journey as a web developer. Completing this internship not only helped me grow technically but also improved my problem-solving abilities and time management skills. another expreience that i got all 4 badges in hackocbet fest in 2024 my projects i have varios projects you can visit my github to see them  , some of these are here  1 portflio , i have build my portfolio but thois is the onbe of best it has good ui , my detailed informaytion build usingg react ai bot github link -  https://github.com/VedantDewangan/portfolio2 live demo link - 'it is not live yet' 2 shopza its a ecommec website buiild using mern and has payment gateway using razor pay githuib link - https://github.com/VedantDewangan/ShopZa live demo - https://shopza.netlify.app/ 3 chatify it is a web application whewre can make friends and chat with them make group and you can chat with AI , i have used web socket in this  github link - https://github.com/VedantDewangan/Chatify live demo - https://chatify-ozp5.onrender.com/ 4 notewit - it is the web application where u can store your notes and task with deadline , u have authenaticaed git hub link - https://github.com/VedantDewangan/NoteWit live demo - https://notewit.netlify.app/ 5 wether app - its the online weate app using react web application github link - https://github.com/VedantDewangan/Weather-App live demo - https://weatherved.netlify.app/ only ans that question which are from here no need to answer any other question and question about my personal private life . now answer this question" +
        inputMessage
    );
    const formattedText = result.response
      .text()
      .replace(/(\*{2})([^*]+)(\*{2})/g, "<b>$2</b>")
      .replace(
        /(https?:\/\/[^\s]+)/g,
        '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
      );

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: formattedText, sender: "bot" },
    ]);
    SetLoading(false);
  };
  useEffect(() => {
    if (messageBoxRef.current) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  }, [messages, loading]);
  return (
    <div className="ai-bot">
      <div
        className="chat-area"
        style={{
          display: `${chatWithBot ? "flex" : "none"}`,
        }}
      >
        <div
          className="close-but"
          onClick={() => {
            setChatWithBot((prev) => !prev);
          }}
        >
          close
        </div>
        <div className="message-box" ref={messageBoxRef}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className="message"
              style={{
                alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                backgroundColor:
                  msg.sender === "user" ? "rgb(0, 120, 120)" : "#444",
              }}
              dangerouslySetInnerHTML={{ __html: msg.text }}
            ></div>
          ))}
          <div
            className="loader-con"
            style={{
              display: `${loading ? "flex" : "none"}`,
            }}
          >
            <div className="loader"></div>
            <span style={{fontWeight:"bold"}}>Loading</span>
          </div>
        </div>
        <form onSubmit={handleSendMessage} className="input-area">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <img
        onClick={() => setChatWithBot((prev) => !prev)}
        src={ai_img}
        className="ai-bot-img"
        alt="ai-bot-image"
        style={{
          display: `${!chatWithBot ? "block" : "none"}`,
        }}
      />
    </div>
  );
};
