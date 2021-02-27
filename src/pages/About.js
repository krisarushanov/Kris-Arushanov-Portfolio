import React, { Component } from 'react'

export default class About extends Component {

  render() {
    let aboutKris = this.props.aboutKris;
    return (  
      <div class="container-fluid">
           <div class="container" >
               <h1>{aboutKris.name}</h1>
               <div class="col-md-8 mx-auto" >

               
               <p text-align="center"> Welcome to the world of Kris. Leave your shoes at the door and keep your mind open. I am a full stack student based on the small Hawaiian island 
               of Maui.</p>
               
               <p> My passsion lies in designing and developing effective web pages that offer a seamless while memorable
               experience to the user. Your customer has made to journey to your site. Lets make the destination epic (kind of like Maui).</p>
              
               <p>
               Drop a line and lets connect! You can also find me on Github or getting washed up trying to surf. Do something awesome and don't forget the best surfer is the one having the most fun.  
              </p>

               </div>
           </div>  
      </div>
  )
    }
  }
