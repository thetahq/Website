import { LOAD_USER_DATA } from "../constants/action-types";
import { connect } from "react-redux";
import DashboardComponent from "../components/authorized/DashboardComponent";

const mapStateToProps = state => ({
    userData: state.langs
})

const mapDispatchToProps = dispatch => ({
    userData: data => dispatch(loadUserData(data))
})

export const loadUserData = data => ({
    type: LOAD_USER_DATA,
    payload: data
})

export default connect(mapStateToProps, mapDispatchToProps) (DashboardComponent)