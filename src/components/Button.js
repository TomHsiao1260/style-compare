import React from 'react';
import '../styles/Button.css';

var element = (id) => document.getElementById(id);

class Button extends React.Component {

    load = () => {
        var file_input = element('file_input');
        var input = file_input.getElementsByTagName('input')[0];

        if(input.files && input.files.length >= 0){

            var container = element('container');
            var img = container.getElementsByTagName('img');
    
            for (let i=0; i<img.length; i++){
                var reader = new FileReader();
                reader.onload = function (e) {
                    img[i].setAttribute("src", e.target.result);
                    img[i].style.opacity = 1;
                }
                reader.readAsDataURL(input.files[i]);
            }
        }
        file_input.style.display = 'none';
    }

    render(){
        return(
            <div id="file_input">
                <button>Upload</button>
                <input onChange={this.load} type="file" accept="image/*" multiple/>
            </div>
        );
    }
}

export default Button;