import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { allTopic } from '../../assets/DSA_TopicAndQuestion';

function DSAQuestions() {
    const [name, SetName] = useState("");
    return (
        <>
            <div className="dsa-container">
                {allTopic.map((obj) => {
                    return (
                        <>
                            <div key={obj.name} >
                                <div className='dsa-question-topic' onClick={() => {
                                    name === `${obj.name}` ? SetName('') : SetName(`${obj.name}`)
                                }} >
                                    <p>
                                        {obj.topic}
                                    </p>
                                    <div>
                                        <svg style={{
                                            display: `${name === `${obj.name}` ? 'block' : 'none'}`
                                        }} onClick={() => {
                                            SetName("")
                                        }} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <polygon points="12,4 4,16 20,16" fill="white" />
                                        </svg>

                                        <svg style={{
                                            display: `${name === `${obj.name}` ? 'none' : 'block'}`
                                        }} onClick={() => {
                                            SetName("basic")
                                        }} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <polygon points="12,20 4,8 20,8" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                                <div className='dsa-question' style={{
                                    display: `${name === `${obj.name}` ? 'block' : 'none'}`
                                }}>
                                    {obj.questions.map((que , i) => {
                                        return (
                                            <>
                                                <Link to={que.link}>
                                                    {que.question}
                                                </Link>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default DSAQuestions