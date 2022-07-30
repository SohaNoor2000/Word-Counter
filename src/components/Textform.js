import React, { useState } from 'react'

function Textform(props) {

    const [text, setText] = useState("");


    const changeUpValue = () => {
        let newtext = text.toUpperCase();
        setText(newtext);

    }
    const changelowValue = () => {
        let newtext = text.toLowerCase();
        setText(newtext);

    }
    const changeTitValue = () => {
        let str = text.toLowerCase().split(" ");
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        setText(str.join(' '));
    }
    const changeSenValue = () => {
        let sentence = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c) {
            return c.toUpperCase();
        })
        setText(sentence);
    }
    const changeClrValue = () => {
        let newtext = "";
        setText(newtext);

    }
    const handleOnchange = (event) => {
        setText(event.target.value);
    }
    // const [btnstyle,setBtnStyle]=useState("Enable Dark Mode");

    // const [myStyle,setMyStyle]=useState({
    //     backgroundColor: 'white',
    //     color:"black",
    //     padding:'8px' 
        
    // })
    
    // const togglerbtn=(event)=>{
    //     if(myStyle.backgroundColor=='black'){
            
    //         setMyStyle({
    //         backgroundColor: 'white',
    //         color:"black",
    //         padding:'8px'   
    //         })
    //         setBtnStyle("Enable Dark Mode")
    //     }
    //     else{
            
    //         setMyStyle({
    //             backgroundColor: 'black',
    //             color:"white",
    //             padding:'8px',
    //             border:'2px solid white'   
    //             })
    //             setBtnStyle("Enable Light Mode")
    //     }
    // }
    return (
        <>
            <div className={`container ${props.mode=='dark'?'text-light':'text-dark'}`} >
                <div className="container" >
                    <div className="mb-3 mt-5">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>{props.Heading}</h2></label>
                        <textarea className="form-control" onChange={handleOnchange} id="exampleFormControlTextarea1" value={text} rows="10"></textarea>
                    </div>
                    <div className="btn btn-primary" onClick={changeUpValue}>Upper Case</div>
                    <div className="btn btn-primary mx-2" onClick={changelowValue}>Lower Case</div>
                    <div className="btn btn-primary" onClick={changeClrValue}>Clear Text</div>
                    <div className="btn btn-primary mx-2" onClick={changeTitValue}>Title Case</div>
                    <div className="btn btn-primary mx-2" onClick={changeSenValue}> Sentence Case</div>
                    {/* <div className="btn btn-primary mx-2" onClick={togglerbtn}>{btnstyle}</div> */}
                  
                </div>
                <div className="container">
                    <h2 className='mt-2'>Text Summary</h2>
                    <p> {text.replace(/\n/g, "").split(' ').filter(value => value != "").length} Words and {text.trim().length} Letters </p>
                    <p> {0.008 * text.replace(/\n/g, "").split(' ').filter(value => value != "").length} Minutes read</p>
                </div>
                <div className='container'>
                    <h2 className='mt-2 primary'>
                        Preview
                    </h2>
                    <p className='text-justify'>{text}</p>
                </div>
            </div>
        </>

    )
}

export default Textform
