import React, { useContext, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProviders';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { FiClock, FiDollarSign, FiUser, FiCalendar, FiMail, FiBriefcase } from 'react-icons/fi';

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}-${month}-${date}`;
}

export const JobDetails = () => {
    const { user } = useContext(AuthContext);
    const [currentDate] = useState(getDate());
    const [cvUrl, setCvUrl] = useState('');
    const jobs = useLoaderData();
    
    const {
        _id,
        email,
        jobTitle,
        jobPostingDate,
        Name,
        applicationDeadline,
        salaryRange,
        jobCategory,
        jobApplicantsNumber,
        pictureURL,
        jobDescription
    } = jobs || {};

    const handleApplyJob = () => {
        if (!user) {
            Swal.fire({
                title: 'Login Required',
                text: 'Please login to apply for this job',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (currentDate > applicationDeadline) {
            Swal.fire({
                title: 'Expired',
                text: 'Application deadline has passed',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (user.email === email) {
            Swal.fire({
                title: 'Invalid Action',
                text: 'You cannot apply to your own job posting',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (!cvUrl) {
            Swal.fire({
                title: 'Missing CV',
                text: 'Please upload your CV before applying',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return;
        }

        const applyData = { 
            jobs, 
            applicantEmail: user.email,
            cvUrl 
        };

        axios.post('https://job-server-site.vercel.app/applyjob', applyData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Application submitted successfully',
                        icon: 'success',
                        confirmButtonText: 'Great!'
                    });
                }
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to submit application',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <Helmet>
                <title>JOBI | {jobTitle || 'Job Details'}</title>
            </Helmet>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden mt-14">
                {/* Job Header */}
                <div className="relative">
                    <img 
                        className="w-full h-64 object-cover" 
                        src={pictureURL || 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} 
                        alt={jobTitle} 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                        <div className="flex justify-between items-end">
                            <div>
                                <span className="inline-block px-4 py-1 bg-sky-500 text-white text-sm font-bold rounded-full mb-2">
                                    {jobCategory}
                                </span>
                                <h1 className="text-3xl font-bold text-white">{jobTitle}</h1>
                            </div>
                            <div className="text-right">
                                <p className="text-white/90 flex items-center">
                                    <FiUser className="mr-1" /> Posted by: {Name}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Job Details */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Job Description</h2>
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-gray-600 dark:text-gray-300">{jobDescription}</p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center">
                                    <FiCalendar className="mr-2 text-sky-500" /> Important Dates
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Posted:</span>
                                        <span className="font-medium">{formatDate(jobPostingDate)}</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Deadline:</span>
                                        <span className={`font-medium ${
                                            new Date(applicationDeadline) < new Date() 
                                                ? 'text-rose-500' 
                                                : 'text-emerald-500'
                                        }`}>
                                            {formatDate(applicationDeadline)}
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center">
                                    <FiBriefcase className="mr-2 text-indigo-500" /> Job Details
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Salary:</span>
                                        <span className="font-medium text-sky-600 dark:text-sky-400">{salaryRange}</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Applicants:</span>
                                        <span className="font-medium">{jobApplicantsNumber}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Apply Section */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-600">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Apply for this Position</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Upload Your CV
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder="Paste your CV URL"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-800 dark:text-white"
                                        value={cvUrl}
                                        onChange={(e) => setCvUrl(e.target.value)}
                                    />
                                </div>

                                {user ? (
                                    <button
                                        onClick={handleApplyJob}
                                        className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all"
                                    >
                                        Submit Application
                                    </button>
                                ) : (
                                    <Link
                                        to="/login"
                                        className="block w-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all text-center"
                                    >
                                        Login to Apply
                                    </Link>
                                )}

                                <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        <FiClock className="inline mr-1" /> Application deadline: {formatDate(applicationDeadline)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};