import { useState } from "react";
import './Reviews.css';

const Reviews = () => {
    const[title, setTitle] = useState('');
    const[body,setBody] = useState('');

    
  return (
    <div className="reviews">
        <h2>Leave a Comment</h2>
        <form>
            <div className="form-group">
            
            <input
            type="text"
            required
            placeholder="Review Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div className="from-group">
            
            <textarea 
            required
            placeholder="Message"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            />
            </div>
            <div className="rate">
              <input type="radio" id="star5" name="rate" value="5" />
               <label for="star5" title="text">5 stars</label>
              <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                  <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">3 stars</label>
              <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
             <input type="radio" id="star1" name="rate" value="1" />
                 <label for="star1" title="text">1 star</label>
  </div>
            <button>Submit</button>
        </form>
    </div>
  )
}
export default Reviews;