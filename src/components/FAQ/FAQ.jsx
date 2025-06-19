
import React from 'react';
import { useState } from 'react';
const fantaQA = [
  {
    question: "What inspired the creation of Fanta?",
    answer: "Fanta was created in Germany in 1940 during World War II due to a trade embargo that made it difficult to import Coca-Cola syrup. To keep the business running, local ingredients like whey and apple pomace were used to develop a new soft drink. This led to the birth of Fanta. Over time, the formula evolved, and Fanta became known globally for its fruity flavors, especially Fanta Orange, which is now one of Coca-Cola’s best-selling beverages worldwide."
  },
  {
    question: "How does Fanta tailor its fruit flavors to different regionsy?",
    answer: "Fanta customizes its flavor offerings based on regional taste preferences. For example, Fanta Lychee is popular in parts of Asia, while Fanta Blackcurrant is loved in Africa. This localization strategy allows Fanta to connect with diverse markets by offering culturally relevant and appealing flavors, strengthening its presence as a global yet locally sensitive brand."
  },  {
    question: "What inspired the creation of Fanta?",
    answer: "Fanta was created in Germany in 1940 during World War II due to a trade embargo that made it difficult to import Coca-Cola syrup. To keep the business running, local ingredients like whey and apple pomace were used to develop a new soft drink. This led to the birth of Fanta. Over time, the formula evolved, and Fanta became known globally for its fruity flavors, especially Fanta Orange, which is now one of Coca-Cola’s best-selling beverages worldwide."
  },
  {
    question: " what does this say about its global brand strategy?",
    answer: "Fanta customizes its flavor offerings based on regional taste preferences. For example, Fanta Lychee is popular in parts of Asia, while Fanta Blackcurrant is loved in Africa. This localization strategy allows Fanta to connect with diverse markets by offering culturally relevant and appealing flavors, strengthening its presence as a global yet locally sensitive brand."
  }
];


const FAQ=()=>{
    //fag open or close state initial null
    const [active,setActive]=useState(null);
//on click function open <-> close
    const handleClick=(index)=>{
        setActive(index===active ? null : index);
    }
    return <div className="max-w-2xl mx-auto mt-20 mb-28 py-4">
        <h1 className="text-3xl font-bold text-center pb-8">
           Frequently Asked Questions
        </h1>
        {fantaQA.map((item,index)=>(
            <div key={index} className='mb-4 py-4 border-b border-gray-300'>
                <div className='flex justify-between items-center cursor-pointer py-4'
                onClick={()=>handleClick(index)}
                >
                    <h3
                    className='text-xl font-semibold text-gray-800'>{item.question}</h3>
                    <span>{active===index ? "-" : "+" }</span>
                </div>
                {active===index && <p> {item.answer}</p>}
            </div>
        ))}
    </div>
}
export default FAQ;