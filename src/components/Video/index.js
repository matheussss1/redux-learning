import { connect } from "react-redux"
import './style.css'

const Video = ({activeVideo}) => {
    return (
        <div className="video-container">
            {activeVideo?
            <h1>Vídeo ativo: {activeVideo}</h1>
            :
            <h1>Nenhum vídeo selecionado</h1>}
        </div>
    )
}

const mapStateToProps = state => ({activeVideo : state.video.activeVideo});

export default connect(mapStateToProps)(Video)