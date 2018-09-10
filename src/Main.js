import React, { Component } from  'react'


class Main extends Component {

    saveText = () => {
        
        const textToWrite = document.getElementById('textarea').innerHTML;
        let textFileAsBlob = new Blob([textToWrite], {type: 'text/plain'});
        const fileNameToSaveAs = 'text.docx';

        let downloadLink = document.createElement('a');
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = 'Download File';
        if (window.webKitURL != null) {
            window.download.href = window.webKitURL.createObjectURL(textFileAsBlob);
        } else {
            downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
            downloadLink.onclick = window.destroyClickedElement;
            downloadLink.style.display = 'none';
            document.body.appendChild(downloadLink);
        }
        downloadLink.click();
    }
    
    destroyClickedElement = (event) => {
        document.body.removeChild(event.target);
    }
    

    render() {
       
        
        return (
            <main className='main'>
                <div className='tools'>
                <button
                type='button'
                onClick={() => this.saveText()}
                value='Save'
                id='save'
                >
                Save
                </button>
                </div>
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