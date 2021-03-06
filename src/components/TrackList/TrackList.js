import React, {Component} from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
    constructor(props){
        super(props);        
    }

    render() {
        return(
            <div className="TrackList">
                {/*<!-- You will add a map method that renders a set of Track components  -->*/}
                {
                    this.props.tracks.map(track => {
                        return(
                            <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} preview_url={track.preview_url}/>
                        );
                    })
                }
            </div>
        );
    }
}

export default TrackList;