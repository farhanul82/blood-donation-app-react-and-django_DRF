import React,{useEffect} from 'react';
import Usernavbar from './Usernavbar';
import { useSelector, useDispatch } from "react-redux";
import { NavItem } from 'react-bootstrap';
import { getUserProfile } from '../Redux/Action/SearchDonorsAction';

const SearchDonorProfile = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        
      }, []);

     
    const profile=useSelector((state) => state.donor.getDonorProfile);
    console.log(profile)
    return (
        <div>
            <Usernavbar/>
         
            <div className="container profileDIv">
        <div className="row">
          <div className="col-md-6">
            <div className="profileimgDiv d-flex justify-content-center">
              <img
                className="profileimgDivimg" 
                src={`http://localhost:8000${profile.image}`}
                
                alt=""
              ></img>
            </div>

            <div className="profileNameDiv d-flex justify-content-center">
              <h4>{profile.name}</h4>
            </div>

            <div>
              <div className="gifDiv d-flex justify-content-center">
                <img src="/images/blood.gif" alt=""></img>
              </div>

              <div className="bloodGroupDiv d-flex justify-content-center">
                <h1>{profile.blood_group}</h1>
              </div>
            </div>
          </div>
     
          <div className="col-md-6">
            
         

            <div className="profileInfoDiv d-flex justify-content-center">
              <ul >
                  <li>Country : {profile.country}</li>
                  <li>City: {profile.city}</li>
                  <li>Area: {profile.area}</li>
                  <li>Profession: {profile.profession}</li>
                  <li>Phone: {profile.phone}</li>
              </ul>
            </div>

            <div>
              <h6 className="limitText">
                <span className="badge limitBadge  ">9</span> days left untill
                you can donate again
              </h6>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SearchDonorProfile;