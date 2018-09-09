import React from  'react'

const Main = () => (
    <main className='main'>
        <textarea 
        id="textarea-en" 
        name="en-text"
        rows="40" cols="100"
        maxLength="5000"
        lang="en"
        wrap="hard">
        </textarea>
        <textarea 
        id="textarea-ar" 
        name="en-text"
        rows="40" cols="100"
        maxLength="5000"
        lang="ar"
        wrap="hard">
        </textarea>
    </main>
);

export default Main