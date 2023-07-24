import { useState } from "react";
import './Reviews.css';
import ReactDOM from 'react-dom';

const style = {
    table: {
        borderCollapse: 'collapse'
    },
    tableCell: {
        border: '1px solid gray',
        margin: 0,
        padding: '5px 10px',
        width: 'max-content',
        minWidth: '150px'
    },
    form: {
        container: {
            padding: '20px',
            border: '1px solid #F0F8FF',
            borderRadius: '15px',
            width: 'max-content',
            marginBottom: '40px'
        },
        inputs: {
            marginBottom: '5px'
        },
        submitBtn: {
            marginTop: '10px',
            padding: '10px 15px',
            border: 'none',
            backgroundColor: 'lightseagreen',
            fontSize: '14px',
            borderRadius: '5px'
        }
    }
}

function ReviewBookForm(props) {
    
    //Create a function to handle when info is submit.
    const handleFirstName = (e) => {
        e.preventDefault();
    
        //Updating the state of the parent using spread operator.
        //This is a standard way to update state since it's immutatble.
        //i.e. you update it via making a copy and adding new info
        props.addEntryToMessage([...props.Message, document.getElementById('firstName').value]);
    }
    const handleMessage = (e) => {
      e.preventDefault();
  
      //Updating the state of the parent using spread operator.
      //This is a standard way to update state since it's immutatble.
      //i.e. you update it via making a copy and adding new info
      props.addEntryToMessage([...props.Message, document.getElementById('message').value]);
  }

    return (
        <form style={style.form.container}>
            <label></label>
            <br />
            {/*Note: replace value with placeholder because value need to be able to change.*/}
            <input
                id='firstName'
                style={style.form.inputs}
                className='userFirstname'
                name='userFirstname'
                type='text'
                placeholder='First name'
            />
            <br />
            <label></label>
            <br />
            <textarea
                style={style.form.inputs}
                className='userMessage'
                name='usermessage'
                type='text'
                placeholder='Message'
            />
            <br />
            <input
                onClick={handleFirstName}
               
                style={style.form.submitBtn}
                className='submitButton'
                type='submit'
                placeholder='Add User'
            />
        </form>
    )
}

function InformationTable({ Message }) {



    return (
        <table style={style.table} className='informationTable'>
           
            {/*Rendering the info in Message via mapping*/}
            {
                Message.map(data =>
                    <tr key={data}>
                        <th>
                            {data}<br />
                        </th>
                    </tr>
                )}
        </table>
    );
}

function Application() {
    //Create a state here to store all your data in the Message.
    const [Message, addEntryToMessage] = useState([]);
    console.log('userInfo parent: ', Message)
    
    //Since you have to pass down two props, you can use objects like this.
    let props = {
        Message: Message,
        addEntryToMessage: addEntryToMessage
    }

    return (
        <section>
            {/*Passing down two props using spread operator*/}
            <ReviewBookForm {...props} />

            {/*Only passing down one prop here because you're don't need to display the data.*/}
            <InformationTable Message={Message} />
        </section>
    );
}

export default Application;
