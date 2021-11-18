import { connect } from "react-redux"

import { toggleVideo } from "../../store/actions/video"

import './style.css'

const Sidebar = ({videos, dispatch}) => {
    return (
        <aside className="sidebar">
            <ul>
                {videos.map(video => 
                    <li key={video.id} onClick={() => dispatch(toggleVideo(video.title))}>
                        <h2>{video.title}</h2>
                        <span>{video.likes} likes</span>
                    </li>
                )}
            </ul>
        </aside>
    )
}

const mapStateToProps = state => ({
    videos: state.video.playlist
})

export default connect(mapStateToProps)(Sidebar)