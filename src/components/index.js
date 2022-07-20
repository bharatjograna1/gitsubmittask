/**
 * Developed By: Bharat Jograna
 * Created on: 04 July 2022
 * update: 
*/
import React from 'react';
import { connect } from "react-redux";
import { getDataList, editDataItem, deleteDataItem } from '../actions';
import { Card } from 'react-bootstrap';
import ModalCompo from './ModalCompo';
import pic from '../assets/profile.png';

class BasicDemo extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			Data: {},
			List: []
		}
	}
	
	componentWillMount() {
       this.props.getDataList();
    }
	
	handleAddProfile = (category) => {
		let DataItem = {};
		const data = this.props.List.data;
		DataItem.CategoryID = category;
		DataItem.CategoryName = data[category].categoryName;
		this.setState({show: true, Data: DataItem});
	}
	
	handleLike = (category, profile) => {
		let list = this.props.List.data;
		list[category].profiles[profile].profileLikes += 1;
		this.props.editDataItem({Data:list});
	}
	
	handleDisike = (category, profile) => {
		let list = this.props.List.data;
		list[category].profiles[profile].profileDislikes += 1;
		this.props.editDataItem({Data:list});
	}
	
	handleDeleteProfile = (category, profile) => {
		let list = this.props.List.data;
		list[category].profiles.splice(profile, 1);
		this.setState({List:list});
		this.props.deleteDataItem({Data:list});
	}
	
	handleEditProfile = (category, profile) => {
		let DataItem = {};
		const data = this.props.List.data;
		DataItem.CategoryID = category;
		DataItem.ProfileID = profile;
		DataItem.CategoryName = data[category].categoryName;
		DataItem.ProgileTitle = data[category].profiles[profile].profileTitle;
		DataItem.ProgileName = data[category].profiles[profile].profileName;
		DataItem.ProgileContext = data[category].profiles[profile].profileTextcont;
		this.setState({show: true, Data: DataItem});
	}
	
	handleCancelEditProfile = () =>{
		this.setState({show: false, Data: {}});
	}
	
	handleSubmitProfile = (data) =>{
		let SubmitData = this.props.List.data;
		SubmitData[this.state.Data.CategoryID].profiles[this.state.Data.ProfileID].profileTextcont = data;
		this.setState({show: false, Data: SubmitData }); 
		this.props.editDataItem({Data:SubmitData});
	}
	
	componentWillReceiveProps(nextProps) {
		if(typeof(nextProps.ReplyData) !== 'object'){}
	}
	
	render() {
		return (
			<div className="row m-0 py-3 px-3" >
			   {this.props.List.data && this.props.List.data.map((categoryList, categoryID) => (
				   <Card className="col-4 bg-white mx-2">
					<a href="#" className="row m-0">
					<h4 className="col-11 px-1 py-1">{categoryList.categoryName}</h4>
					<i className="col-1 bi fs-4 bi-person-plus-fill" onClick={()=>this.handleAddProfile(categoryID)} />
					</a>
					  <Card.Body className="p-1">
					  {categoryList.profiles.map((profileList, profileID) => (
					  <Card className="profile-card bg-light mb-3" key={profileList.key}>
						 <Card.Header className="row m-0">
							<span className="col-9">{profileList.profileTitle}</span>
							<span className="col-3">
							<a style={{paddingRight : '8px'}} href="#"><i className="bi fs-4 bi-pencil-fill" onClick={()=>this.handleEditProfile(categoryID, profileID)} /></a>
							<a href="#"><i className="bi fs-4 bi-trash-fill" onClick={()=> this.handleDeleteProfile(categoryID, profileID)} /></a>
							</span>
						 </Card.Header>
						 <Card.Body>
							<div>
							  <img className="mx-3" width='40%' src={pic} align="left" alt={profileList.profileName} />
							  <div>
							  <h2>{profileList.profileName}</h2>
							  </div>
							  <div>
								<span>{profileList.profileTextcont}</span>
							  </div>
							</div>
						 </Card.Body>
						 <Card.Footer className="row m-0">
							<a href="#" className="col-6" align="left" ><i className="bi fs-4 bi-check-circle" onClick={()=> this.handleLike(categoryID, profileID)} /><b className="fs-4 mx-1">{profileList.profileLikes}</b></a>
							<a href="#" className="col-6" align="right" ><i className="bi fs-4 bi-x-circle" onClick={()=> this.handleDisike(categoryID, profileID)} /><b className="fs-4 mx-1">{profileList.profileDislikes}</b></a>
						 </Card.Footer>
					  </Card>
					  ))}
					  </Card.Body>
				   </Card>
			   ))}
				   {this.state.show && 
					<ModalCompo 
					   show = {this.state.show} 
					   Data={this.state.Data} 
					   handleClose={this.handleCancelEditProfile}
					   handleSubmit={this.handleSubmitProfile}
				   />}
			</div>
		);
	}
}

//Map state to props
const mapStateToProps = ({ CommonRdcr }) => {
	const response = {
		List: CommonRdcr.List,
		ReplyData: CommonRdcr.ReplyData,
		Response: CommonRdcr.Response
	}
	return response;
};

export default connect(mapStateToProps, {
	getDataList,
	editDataItem,
	deleteDataItem
})(BasicDemo);

