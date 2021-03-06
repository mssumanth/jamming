import React, {Component} from 'react';
import './Track.css';

class Track extends Component {
    constructor(props){
        super(props);
        this.renderAction = this.renderAction.bind(this);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }


    addTrack(event){
        event.preventDefault();
        this.props.onAdd(this.props.track);
    }

    removeTrack(event){
        event.preventDefault();
        this.props.onRemove(this.props.track);
    }

    renderAction() {
       if (this.props.isRemoval === true) {
            return <a className="Track-action" onClick={this.removeTrack}>-</a>
       } else {
            return <a className="Track-action" onClick={this.addTrack}>+</a>
       }
    }

    render() {
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>
                        {/*<!-- track name will go here -->*/}
                        {this.props.track.name}
                    </h3>
                    <p>
                        {/*<!-- track artist will go here--> | <!-- track album will go here -->*/}
                        {this.props.track.artist} | {this.props.track.album}
                    </p>
                    <p>
                        <br/>
                        Preview:
                    </p>                        

                    {/*Adding the audio preview button here in the Track Component.*/}
                    <p>
                        <br/>
                        <audio controls>
                            <source src={this.props.track.preview_url}/>
                            Your browser does not support the audio element.
                        </audio>
                    </p>

                </div>
                <div>
                    {this.renderAction()}
                    
                </div>
            </div>
        );
    }


}

export default Track;