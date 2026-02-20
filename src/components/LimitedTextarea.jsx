import { useState, useEffect } from 'react'

const textareaStyle = {
    width: '300px',
    height: '150px',
}
 
const pStyle = {
    fontFamily: 'monospace',
    fontSize: '14px',
    textAlign: 'right',
    marginTop: '4px',
}


const LimitedTextarea = ({maxChar}) => {

const [text, setText] = useState('')

useEffect(() => {
    document.title = `${text.length}`
}, [text])

return (
   <>
       <textarea 
            style={textareaStyle}
            value={text}
            onChange={ ({target}) => setText(target.value)}
            placeholder='Start typing here...'
            maxLength={maxChar || 200}
        >
        </textarea>
        <p style={pStyle}>{text.length}/{maxChar || 200}</p>
   </>
   )
}

export default LimitedTextarea