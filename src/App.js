/**
 * Developed By: Bharat Jograna
 * Created on: 04 July 2022
 * update: 20 July 2022
*/
import HomeCompo from './components';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

const ListData = [{
	   categoryName:"handcrafted steel sausages",
	   profiles:[
		   {
			   profileTitle:"National Program Producer",
			   profileName:"Kimberly Prosacco",
			   profileImgsrc:"",
			   profileTextcont:"Some quick example text to build on the card title and make up the bulk of the card's content.",
			   profileLikes:3,
			   profileDislikes:2,
		   },
		   {
			   profileTitle:"National Program Producer",
			   profileName:"Kimberly Prosacco",
			   profileImgsrc:"",
			   profileTextcont:"Some quick example text to build on the card title and make up the bulk of the card's content.",
			   profileLikes:3,
			   profileDislikes:2,
		   },
		   {
			   profileTitle:"National Program Producer",
			   profileName:"Kimberly Prosacco",
			   profileImgsrc:"",
			   profileTextcont:"Some quick example text to build on the card title and make up the bulk of the card's content.",
			   profileLikes:3,
			   profileDislikes:2,
		   }
	   ]
   },
   {
	   categoryName:"Increadible Metal Shift",
	   profiles:[
		   {
			   profileTitle:"National Program Producer",
			   profileName:"Kimberly Prosacco",
			   profileImgsrc:"",
			   profileTextcont:"Some quick example text to build on the card title and make up the bulk of the card's content.",
			   profileLikes:3,
			   profileDislikes:2,
		   }
	   ]
   }
]
if(typeof(localStorage.getItem("ListData")) != 'string'){
	localStorage.setItem("ListData", JSON.stringify(ListData));
}

function App() {
  return (
	<Provider store={configureStore()}>
		<div className="bg-primary">
		  <HomeCompo />
		</div>
	</Provider>
  );
}

export default App;
