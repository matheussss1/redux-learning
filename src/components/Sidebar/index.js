import { connect } from "react-redux"

const Sidebar = ({videos}) => {
    return (
        <aside>
            <ul>
                {videos.map(video => 
                    <li key={video.id}>
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