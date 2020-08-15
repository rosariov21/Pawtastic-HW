
import React, {Component} from 'react';

class Pawtastic extends Component  {


 constructor(props){


   super(props);


   this.state={


     name:'',
     breed:'',
     birthday:new Date().toString(),
    gender:'Male',
    spayedOrNeutered:'Spayed',
    weight:''


   };


   this.handleName = this.handleName.bind(this);

   this.handleBreed = this.handleBreed.bind(this);

   this.handleChange = this.handleChange.bind(this);

   this.handleBirthday = this.handleBirthday.bind(this);

   this.handleWeight = this.handleWeight.bind(this);

   this.handleGender = this.handleGender.bind(this);

   this.handleSubmit = this.handleSubmit.bind(this);


 }

 handleSubmit(event) {
 event.preventDefault();
 alert(`Dog info ${this.state.name} ${this.state.breed} ${this.state.birthday} ${this.state.gender} ${this.state.weight} ${this.state.spayedOrNeutered}`);

 }
 handleBirthday(event){
 console.log(event.target.value);
 this.setState({birthday: new Date(event.target.value).toString()});


 }


 handleChange(event) {
console.log(event.target.value);
   if(this.state.spayedOrNeutered==="Spayed"){

     this.setState({spayedOrNeutered: "Neutered"});
   } else {
     this.setState({spayedOrNeutered: "Spayed"});

   }

 }
 handleWeight(event) {
 this.setState({weight: event.target.value});

 }
 handleName(event) {
this.setState({name: event.target.value});


 }
handleBreed(event) {
this.setState({breed: event.target.value});


 }
handleGender(){
if(this.state.gender==="Male"){
 this.setState({gender: "Female"});
 } else {
 this.setState({gender: "Male"})

   }
 }
render(){


   return (


     <div className="makerow" id="box1">
       <div class="menu">
       <h1>Pawtastic</h1>
<div className="theside">
 <input type="radio" name="radio" />
 <div className="customRadio"></div>
 <h6>Human Profile</h6>
          </div>
  <div className="sideBar">
 <input type="radio" name="radio" checked readOnly/>
  <div className="custRadio"></div>
 <h6>Pet basics</p>


       </div>


       <div className="sideBar">


         <input type="radio" name="radio" />


         <div className="customRadio"></div>


         <p>Pet Details</p>


       </div>


       <div className="sideBar">


         <input type="radio" name="radio" />


         <div className="customRadio"></div>


         <p>Confirm</p>


       </div>


       <a href="#">Save and Exit</a>


       </div>


       <form id="main" onSubmit={this.handleSubmit}>


       <h1>Yay, we love dogs! Give us the basics about your pup</h1>


       <div className="row">


         <label>


           Name


           <input type="text" onChange={this.handleName} placeholder="Pet's name"/>


         </label>


         <label>


           <br />


           <div className="row">


             <input type="button" value="Logo" id="logoButton"/>


             Upload a photo


           </div>


         </label>


       </div>


       <div className="row">


           <label>


             Breed


             <input type="text" placeholder="Pet's breed" onChange={this.handleBreed}/>


           </label>


           <label>


             Birthday


             <input type="date" onChange={this.handleBirthday}/>


           </label>


         </div>


         <div className="row">


           <label>


             Gender


             <input type="checkbox" id="toggle" className="checkbox" onChange={this.handleGender}/> 


             <div htmlFor="toggle" className="switch">


               <span>Male</span>


               <span>Female</span>


             </div>


           </label>


           <label>


             Spayed or Neutered


             <input type="checkbox" id="toggle2" className="checkbox" onChange={this.handleChange}/> 


             <div htmlFor="toggle2" className="switch">


               <span>Spayed</span>


               <span>Neutered</span>


             </div>


           </label>


         </div>


         <label>


           Weight


           <div className="row weightContainer">


             <input type="radio" id="twentyfive" name="weight" value="0-25 lbs" onChange={this.handleWeight}/>


             <label htmlFor="twentyfive" className="weight">0-25 lbs</label>


             <input type="radio" id="fifty" name="weight" value="25-50 lbs" onChange={this.handleWeight}/>


             <label htmlFor="fifty" className="weight">25-50 lbs</label>


             <input type="radio" id="seventyfive" name="weight" value="50-100 lbs" onChange={this.handleWeight}/>


             <label htmlFor="seventyfive" className="weight">50-100 lbs</label>


             <input type="radio" id="hundred" name="weight" value="100+ lbs" onChange={this.handleWeight}/>


             <label htmlFor="hundred" className="weight">100+ lbs</label>


             <div className="replacement"></div>


           </div>


         </label>


         <div id="white" className="row">


           <label>


             <input type="button" id="backButton" value="Back"/>


           </label>


           <label>


             <input type="submit" id="nextButton" value="Next"/>


           </label>


         </div>


       </form>


     </div>


   );


 }






}







export default Pawtastic;
