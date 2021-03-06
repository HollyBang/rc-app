import { connect } from 'react-redux';
import Component from './MainComponent.jsx';
import * as selectors from './selectors';
import * as actions from "./actions";


const mapStateToProps = state => ({
    languages: selectors.getLanguages(state),
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);