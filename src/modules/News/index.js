import { connect } from 'react-redux';
import Component from './News.jsx';
import * as actions from './actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    getNews: (payload) => dispatch(actions.getNews(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);