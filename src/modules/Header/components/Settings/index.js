import { connect } from 'react-redux';
import Component from './Settings.jsx';
import * as actions from './actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    changeLanguage: (payload) => dispatch(actions.changeLanguage(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);