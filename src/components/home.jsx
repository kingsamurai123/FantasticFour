import React from 'react'
import wickedones from '../sounds/WickedOnes.mp3'
import fear from '../sounds/Fear.mp3'
import thousandyears from '../sounds/ThousandYears.mp3'
import seeyouagain from '../sounds/SeeYouAgain.mp3'
import { Howl, Howler } from 'howler'
import Card from './card.jsx'
import '../style.css'
import image from '../thumbnails/wickedonesthumbnail.jpg'
import image2 from '../thumbnails/fearthumbnail.jpg'
import image3 from '../thumbnails/thousandyearsthumbnail.jpg'
import image4 from '../thumbnails/seeyouagainthumbnail.jpg'
class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            current: '',
            sound:'',
            'Wicked': new Howl({src: wickedones}),
            'Fear': new Howl({src: fear}),
            'ThousandYears': new Howl({src: thousandyears}),
            'SeeYouAgain': new Howl({src: seeyouagain})
        }
        this.playAudio = this.playAudio.bind(this)
        // this.pauseAudio = this.pauseAudio.bind(this)
    }
    playAudio(id){
        if(this.state.current === ''){
            this.setState((prev)=>{
                return {
                    current: id,
                    sound: prev[id]
                }
            },()=>{
                console.log(this.state)
                this.state.sound.load()
                this.state.sound.play()
            })
        }
        else if(this.state.current === id){
            this.state.sound.play()
        }
        else{
            this.state.sound.unload()
            this.setState((prev)=>{
                return {
                    current: id,
                    sound: prev[id],
                }
            },()=>{
                console.log(id)
                this.state.sound.load()
                this.state.sound.play()
            })
        }
    }
    // pauseAudio(id){
    //     if(this.state.current === id){
    //         this.sound.pause()
    //     }
    //     else{
    //         this.sound.unload()
    //         this.setState((prev)=>{
    //             return {
    //                 current: id,
    //                 sound: prev.id
    //             }
    //         })
    //         this.sound.load()
    //         this.sound.play()
    //     }
    // }
    render(){
        return (
            <div>
                <div className ='header'></div>
                <Card 
                    id = 'Wicked'
                    playAudio = {(id2)=>{this.playAudio(id2)}}
                    // pauseAudio = {(id)=>{this.pauseAudio(id)}}
                    pauseAudio = {()=>{this.state.sound.pause()}}
                    image = {image}
                    reset = {this.state.current}
                >
                </Card>
                <Card
                    id = "Fear" 
                    playAudio = {(id1)=>{this.playAudio(id1)}}
                    // pauseAudio = {(id)=>{this.pauseAudio(id)}}
                    pauseAudio = {()=>{this.state.sound.pause()}}
                    image = {image2}
                    reset = {this.state.current}
                >
                </Card>
                <Card
                    id = "ThousandYears" 
                    playAudio = {(id1)=>{this.playAudio(id1)}}
                    // pauseAudio = {(id)=>{this.pauseAudio(id)}}
                    pauseAudio = {()=>{this.state.sound.pause()}}
                    image = {image3}
                    reset = {this.state.current}
                >
                </Card>
                <Card
                    id = "SeeYouAgain" 
                    playAudio = {(id1)=>{this.playAudio(id1)}}
                    // pauseAudio = {(id)=>{this.pauseAudio(id)}}
                    pauseAudio = {()=>{this.state.sound.pause()}}
                    image = {image4}
                    reset = {this.state.current}
                >
                </Card>
            </div>
            )
    }
}
 export default Home