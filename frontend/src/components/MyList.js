import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { fetchDonationInfo } from '../Redux/Action/DonatiionInfoAction';
import Usernavbar from './Usernavbar';

const MyList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDonationInfo())

  }, []);


  const Info = useSelector(state => state.donationInfo.donationInfo)
  return (
    <div >
      <Usernavbar />
      <div className="container">
        <div className="row">

          {
            Info.map(item => {
              return (
                <div className="col-md-4 mt-3 Donation_info_col">
                  <div className="Donation_info_Div text-center">
                    <p>Hospital:{item.hospital}<br></br></p>
                    <p> Last Donate:{item.donation_date}</p>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>

    </div>
  );
};

export default MyList;