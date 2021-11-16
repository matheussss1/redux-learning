import { connect } from "react-redux"


const Video = ({activeVideo}) => {
    return activeVideo?
        <h1>Vídeo ativo: {activeVideo}</h1>
        :
        <h1>Selecione um vídeo para assistir:</h1>;
}

const mapStateToProps = state => ({activeVideo : state.video.activeVideo});

export default connect(mapStateToProps)(Video)