import React, { useContext, useState ,useEffect } from 'react'
import { AuthContext } from '../providers/AuthProviders';
import axios from 'axios';
import { JobTable } from './JobTable';

export const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  const url = `http://localhost:5000/myjobs?email=${user?.email}`;
  useEffect(() => {

      axios.get(url, {withCredentials: true}) 
      .then(res => {
          setJobs(res.data);
      })
      // fetch(url)
      //     .then(res => res.json())
      //     .then(data => setBookings(data))
  }, [url]);

  const handleDelete = id => {
    const proceed = confirm('Are You sure you want to delete');
    if (proceed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successful');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
    }
}

const handleUpdate = id => {

}

  return (
    <div>
            <h2 className="text-5xl">Your bookings: {jobs.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Categories</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map(job => <JobTable  key={jobs._id}
                              job={job}
                              handleDelete={handleDelete}
                              handleUpdate={handleUpdate}
                              >
                              </JobTable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
  )
}
