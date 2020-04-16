import React, { Component } from "react"
import Title from "./title"

class SoundCloudPlayer extends Component {

  render() {
    return (
      <div>
        {/* <Title text={"Podcast"}/> */}
        <iframe 
          width="100%" 
          height="300"
          scrolling="no" 
          frameBorder="no" 
          allow="autoplay" 
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1029315298&color=%23f2f2f2&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
        </iframe>
      </div> 
    )
  }
}

export default SoundCloudPlayer