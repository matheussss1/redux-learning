import { connect } from "react-redux"

import { toggleVideo } from "../../store/actions/video"

const Sidebar = ({videos, dispatch}) => {
    return (
        <aside>
            <ul>
                {videos.map(video => 
                    <li key={video.id} onClick={() => dispatch(toggleVideo(video.id))}>
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