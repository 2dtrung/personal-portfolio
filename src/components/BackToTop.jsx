import React, {Component} from 'react';
import top from '../assets/lottie/arrow-up.json';
import GreetingLottie from "../components/DisplayLottie";

export default class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
          is_visible: false
        };
    }
  
    componentDidMount() {
        var scrollComponent = this;
        document.addEventListener("scroll", function(e) {
          scrollComponent.toggleVisibility();
        });
    }
  
    toggleVisibility() {
        if (window.pageYOffset > 300) {
          this.setState({
            is_visible: true
          });
        } else {
          this.setState({
            is_visible: false
          });
        }
    }
  
    scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }
    render() {
        const { is_visible } = this.state;
        return (
          <div className="scroll-to-top" style={{width: '100px', height: '100px', position: 'fixed', bottom: '0', right: '0'}}>
            {is_visible && (
              <div onClick={() => this.scrollToTop()}>
                <GreetingLottie animationData={top}/>
              </div>
            )}
          </div>
        );
    }
}