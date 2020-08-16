import React from 'react';
import '../styles/App.css';
import Button from './Button';
import Image from './Image';

var element = (id) => document.getElementById(id);

class App extends React.Component {

  clip = (e) => {
    var x;
    var container = element('container');
    var img = container.getElementsByTagName('img');

    var target = e.target.closest('img');
    if (!target || !container.contains(target)) return

    try{
        if (e.nativeEvent.offsetX){
          x = e.nativeEvent.offsetX; // Desktop
        }else{ 
          x = e.touches[0].clientX; // Mobile
        }
    }catch{ return }
  
    img[0].style.clip = `rect(0, ${x}px, auto, 0)`; 
    img[1].style.clip = `rect(0, auto, auto, ${x+3}px)`; 
  }

  render(){
    return(
      <div id="container" 
           onTouchMove={this.clip} 
           onMouseMove={this.clip}
      > 
        <Image />
        <Button />
      </div>
    );
  }
}

export default App;
