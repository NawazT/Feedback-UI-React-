import {v4 as uuidv4} from "uuid"
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeesbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeebackForm from "./components/FeebackForm"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])

    }

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((items)=> items.id !== id ))
        } 
        
    }
    
    return (
    <>
    <Header  />
    <div className="container">
        <FeebackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
         <FeedbackList feedback = {feedback} 
         handleDelete={deleteFeedback}/>
    </div>
    </>
    )
}

export default App 
  