import React, { useContext, useState ,useEffect } from 'react'
import { AuthContext } from '../providers/AuthProviders';
import axios from 'axios';
import { JobTable } from './JobTable';
import Swal from 'sweetalert2';

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
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/jobs/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            "Deleted!",
                            "job has been deleted.",
                            "success"
                        );
                        const remaining = jobs.filter(added => added._id !== id);
                        setJobs(remaining);
                    }
                })
        }
    })
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
                              >
                              </JobTable>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
  )
}
