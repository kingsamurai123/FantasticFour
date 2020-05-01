import React, {Component} from 'react';
import '../style.css'
class Card extends Component{
    constructor(){
        super()
        this.state = {
            play: false
        }
        this.togglePlayPause = this.togglePlayPause.bind(this)
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.id !== nextProps.reset){ return {play: false}}
        else 
        return null
    }
    togglePlayPause(){
        if(this.state.play){
            this.props.pauseAudio(this.props.id)
            this.setState({play: false})
        }
        else{
            this.props.playAudio(this.props.id)
            this.setState({play: true})
        }
    }
    render(){
        let disbutton
        if(this.state.play){
            disbutton = <div className = 'btn' id = 'pauseBtn' onClick = {this.togglePlayPause}></div>
        }
        else
            disbutton = <div className = 'btn' id ='playBtn' onClick = {this.togglePlayPause}></div>
        if(this.props.id === 'ThousandYears' || this.props.id  === 'SeeYouAgain'){
            return(
                <div className = 'card' style = {{float: 'right'}}>
                <img src={this.props.image} alt="This is Wicked"/>
                { disbutton }
                {/* <div class = 'btn' id = 'resume '></div> */}
            </div>
            )
        }
        else{
            return (
                <div className = 'card'>
                    <img src={this.props.image} alt="This is Wicked"/>
                    { disbutton }
                    {/* <div class = 'btn' id = 'resume '></div> */}
                </div>
            )
        }
    }
}

export default Card