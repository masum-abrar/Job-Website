import React, { useContext, useState ,useEffect } from 'react'
import { AuthContext } from '../providers/AuthProviders';
import axios from 'axios';
import { AppliedTable } from './AppliedTable';

export const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  const url = `http://localhost:5000/appliedjobs?email=${user?.email}`;
  useEffect(() => {

      axios.get(url, {withCredentials: true})
      .then(res => {
          setJobs(res.data);
      })
      // fetch(url)
      //     .then(res => res.json())
      //     .then(data => setBookings(data))
  }, [url]);

  return (
    <div>
            <h2 className="text-5xl">Your bookings: {jobs.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Job Title</th>
                            <th>Categories</th>
                            <th>Date</th>
                            <th>Price</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map(job => <AppliedTable key={jobs._id}
                              job={job}
                              // handleDelete={handleDelete}
                              // handleBookingConfirm={handleBookingConfirm}
                              >
                              </AppliedTable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
  )
}
