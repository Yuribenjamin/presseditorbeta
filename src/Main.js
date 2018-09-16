import React, { Component } from  'react'


class Main extends Component {

    render() {
       
        
        return (
            <main className='main'>
                <textarea 
                id="textarea"
                className='textarea-en' 
                name="en-text"
                rows="40" cols="100"
                maxLength="5000"
                lang="en"
                wrap="hard">
                </textarea>
                <textarea 
                id="textarea"
                className='textarea-ar'
                name="en-text"
                rows="40" cols="100"
                maxLength="5000"
                lang="ar"
                wrap="hard">
                </textarea>
            </main>
        )
    }
}

export default Main