import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [location, setLocation] = useState('');
  const [page, setPage] = useState(1);
  const [totalJobs, setTotalJobs] = useState(0);
  const limit = 12;

  useEffect(() => {
    fetchJobs();
  }, [location, page]);

  const fetchJobs = async () => {
    const response = await axios.get(`https://padhakku-job-listing.onrender.com/api/jobs?location=${location}&page=${page}&limit=${limit}`);
    setJobs(response.data.jobs);
    setTotalJobs(response.data.total);
  };

  const handleNextPage = () => {
    if (page < Math.ceil(totalJobs / limit)) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Job List */}
      <div className="w-1/3 bg-gray-100 p-4">
        <input
          type="text"
          placeholder="Search by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <ul>
          {jobs.map((job, index) => (
            <li
              key={index}
              onClick={() => setSelectedJob(job)}
              className="p-2 border-b cursor-pointer hover:bg-gray-200"
            >
              {job.title} - {job.location}
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-4">
          <button onClick={handlePrevPage} disabled={page === 1} className="px-4 py-2 bg-blue-500 text-white rounded">
            Previous
          </button>
          <button onClick={handleNextPage} disabled={page >= Math.ceil(totalJobs / limit)} className="px-4 py-2 bg-blue-500 text-white rounded">
            Next
          </button>
        </div>
      </div>

      {/* Job Details */}
      <div className="w-2/3 p-4 cursor ">
        {selectedJob ? (
          <div>
            <div className='flex justify-between'>
            <h2 className="text-4xl font-bold text-slate-700 ">{selectedJob.title}</h2>
            <button className='px-4 py-2 bg-blue-500 text-white font-semibold relative top-1 rounded'  onClick={() => window.location.href = `${selectedJob.job_link}`} >Quick Apply</button>
            </div>

            <p className='text-2xl font-semibold text-slate-600'>{selectedJob.company}</p>
              <p className='text-xl font-semibold text-slate-500'>{selectedJob.location}</p>
            <hr className='mt-2'/>
            <p className='text-2xl font-semibold text-slate-600 mt-2'>Job Details</p>
            <p className='text-xl font-semibold text-slate-500 '>{selectedJob.source}</p>
            <p className='text-xl font-semibold text-slate-500'>{selectedJob.employment_type}</p>
            <p className='text-xl font-semibold text-slate-500'>{selectedJob.experience}</p>
            <p className='text-xl font-semibold text-slate-500'>{selectedJob.postedDateTime.$date}</p>
            <hr className='mt-2'/>
            <img className='mt-3 rounded-lg' src={selectedJob.companyImageUrl} alt="" />
          </div>
        ) : (
          <p className=' text-slate-700 font-bold text-4xl flex justify-center'>Select a job to view details</p>
        )}
      </div>
    </div>
  );
}

export default App;
