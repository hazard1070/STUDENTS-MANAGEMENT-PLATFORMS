import React, { useState, useEffect } from 'react';
import { Search, Menu, Eye, Trash2, Plus, ArrowLeft, Mail } from 'lucide-react';
import Navbar from './components/Navbar';



  const currentStudentId = '12345';


// API Configuration
const API_BASE = 'http://localhost:3000/api';

// API Helper Functions
const api = {
  async getAllStudents(page = 1, limit = 7, search = '') {
    const response = await fetch(`${API_BASE}/students?page=${page}&limit=${limit}&search=${search}`);
    if (!response.ok) throw new Error('Failed to fetch students');
    return response.json();
  },
  
  async getStudent(id) {
    const response = await fetch(`${API_BASE}/students/${id}`);
    if (!response.ok) throw new Error('Student not found');
    return response.json();
  },
  
  async createStudent(studentData) {
    const response = await fetch(`${API_BASE}/students`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(studentData)
    });
    const data = await response.json();
    if (!response.ok) throw data;
    return data;
  },
  
  async updateStudent(id, studentData) {
    const response = await fetch(`${API_BASE}/students/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(studentData)
    });
    const data = await response.json();
    if (!response.ok) throw data;
    return data;
  },
  
  async deleteStudent(id) {
    const response = await fetch(`${API_BASE}/students/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error('Failed to delete student');
    return response.json();
  }
};

// Landing Page Component
const LandingPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex justify-between items-center px-8 py-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          <span className="font-bold text-gray-800">STUDENTSYNC</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Our Services</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
        </nav>
        <button 
          onClick={() => onNavigate('students')}
          className="px-6 py-2 border-2 border-green-500 text-green-500 rounded-full hover:bg-green-50"
        >
          Get Started
        </button>
        <Menu className="md:hidden w-6 h-6 text-gray-600" />
      </header>

      <section className="px-8 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-green-500 text-sm mb-2">Streamline management platform</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              STUDENTSYNC<br />
              MANAGEMENT WEB APP
            </h1>
            <p className="text-gray-600 mb-6">Modern streamline for Academic Institution</p>
            <div className="flex gap-4">
              <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50">
                Learn More
              </button>
              <button 
                onClick={() => onNavigate('students')}
                className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" alt="Students" className="rounded-lg w-full h-48 object-cover col-span-2" />
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=200&h=200&fit=crop" alt="Student" className="rounded-lg w-full h-32 object-cover" />
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&h=200&fit=crop" alt="Students group" className="rounded-lg w-full h-32 object-cover" />
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=200&fit=crop" alt="Study group" className="rounded-lg w-full h-32 object-cover col-span-2" />
          </div>
        </div>
      </section>

      <section className="px-8 py-12 max-w-7xl mx-auto">
        <p className="text-green-500 text-sm mb-2 text-center">Vibrant Culture</p>
        <h2 className="text-3xl font-bold mb-12 text-center">Kepler College StudentSync</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-red-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="font-bold mb-2">Digital Transformation</h3>
            <p className="text-sm text-gray-600">Streamline administrative tasks and student management.</p>
          </div>
          
          <div className="bg-purple-900 text-white p-6 rounded-lg">
            <div className="w-12 h-12 bg-purple-800 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="font-bold mb-2">Decentralized Instructions</h3>
            <p className="text-sm">Modern approach to educational management systems.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-bold mb-2">Every Learner Develops</h3>
            <p className="text-sm text-gray-600">Track and support student progress effectively.</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 px-8 py-12 mt-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">STUDENTSYNC MANAGEMENT APP</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Kepler College Kigali</p>
              <p>KG 474 St, Kigali, Rwanda</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect Us</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>info@studentsync.rw</p>
              <p>+250-788-123-456</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Social Media</h3>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">
          © Copyright by Keisuma. All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

    <div>
      <Navbar studentId={currentStudentId} />
      {/* Other components like StudentList go here */}
    </div>

// Students Page Component
const StudentsPage = ({ onNavigate }) => {
  const [students, setStudents] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, [currentPage, searchTerm]);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const data = await api.getAllStudents(currentPage, 7, searchTerm);
      setStudents(data.students);
      setTotalPages(data.pagination.totalPages);
      setError(null);
    } catch (err) {
      setError('Failed to load students. Please check if the backend server is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await api.deleteStudent(id);
        fetchStudents();
      } catch (err) {
        alert('Failed to delete student');
        console.error(err);
      }
    }
  };

  const handleAddStudent = async (newStudent) => {
    try {
      await api.createStudent(newStudent);
      setShowAddModal(false);
      fetchStudents();
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          <span className="font-bold text-gray-800">STUDENTSYNC</span>
        </div>
        <div className="flex gap-6 text-sm">
          <button onClick={() => onNavigate('landing')} className="text-gray-600 hover:text-gray-800">Home</button>
          <button className="text-gray-800 font-medium">All Student</button>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="px-6 py-2 border-2 border-green-500 text-green-500 rounded-full hover:bg-green-50"
        >
          + Add Student
        </button>
      </header>

      <div className="px-8 py-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-green-500">All students</h1>
            <div className="flex gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button 
                onClick={() => setShowAddModal(true)}
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Student
              </button>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
              <p className="mt-4 text-gray-600">Loading students...</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">User name</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Student ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Enrollment date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
                              {student.first_name?.[0]}{student.last_name?.[0]}
                            </div>
                            <span className="font-medium">{student.first_name} {student.last_name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{student.student_id}</td>
                        <td className="py-3 px-4 text-gray-600">
                          {new Date(student.enrollment_date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-green-600">{student.status}</span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <button 
                              onClick={() => onNavigate('details', student)}
                              className="p-2 hover:bg-gray-100 rounded"
                            >
                              <Eye className="w-5 h-5 text-green-500" />
                            </button>
                            <button 
                              onClick={() => handleDelete(student.id)}
                              className="p-2 hover:bg-gray-100 rounded"
                            >
                              <Trash2 className="w-5 h-5 text-red-500" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded ${
                        currentPage === page
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {showAddModal && (
        <AddStudentModal 
          onClose={() => setShowAddModal(false)} 
          onAdd={handleAddStudent}
        />
      )}
    </div>
  );
};

// Add Student Modal
const AddStudentModal = ({ onClose, onAdd, student = null }) => {
  const [formData, setFormData] = useState({
    firstName: student?.first_name || '',
    lastName: student?.last_name || '',
    dateOfBirth: student?.date_of_birth || '',
    studentId: student?.student_id || '',
    email: student?.email || '',
    contactNumber: student?.contact_number || '',
    enrollmentDate: student?.enrollment_date || '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.studentId.trim()) newErrors.studentId = 'Student ID is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.enrollmentDate) newErrors.enrollmentDate = 'Enrollment date is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitting(true);
      try {
        await onAdd(formData);
      } catch (err) {
        if (err.error === 'Conflict') {
          alert(err.message);
        } else if (err.errors) {
          const newErrors = {};
          err.errors.forEach(error => {
            newErrors[error.field] = error.message;
          });
          setErrors(newErrors);
        } else {
          alert('Failed to save student. Please try again.');
        }
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-2">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          <span className="font-bold text-gray-800">STUDENTSYNC</span>
        </div>
        
        <h2 className="text-xl font-bold text-center mb-6">
          {student ? 'Edit student' : 'Add new student'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Last name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Date Of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Student ID</label>
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.studentId ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.studentId && <p className="text-red-500 text-xs mt-1">{errors.studentId}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.contactNumber ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.contactNumber && <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Enrollment date</label>
            <input
              type="date"
              name="enrollmentDate"
              value={formData.enrollmentDate}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.enrollmentDate ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.enrollmentDate && <p className="text-red-500 text-xs mt-1">{errors.enrollmentDate}</p>}
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
            >
              {submitting ? 'Saving...' : 'Add Student'}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={submitting}
              className="flex-1 px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Student Details Page
const StudentDetailsPage = ({ student, onNavigate }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(student);

  const handleEdit = async (updatedData) => {
    try {
      const result = await api.updateStudent(currentStudent.id, updatedData);
      setCurrentStudent(result.student);
      setShowEditModal(false);
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b px-8 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">S</span>
          </div>
          <span className="font-bold text-gray-800">STUDENTSYNC</span>
        </div>
      </header>

      <div className="px-8 py-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-2xl font-bold">Welcome</h1>
                <p className="text-gray-500 text-sm">Tue 12th June 2024</p>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="h-16 bg-gradient-to-r from-green-400 to-green-300 rounded-lg"></div>
          </div>

          <div className="p-6">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                {currentStudent.first_name?.[0]}{currentStudent.last_name?.[0]}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold">{currentStudent.first_name} {currentStudent.last_name}</h2>
                    <p className="text-gray-500">{currentStudent.email}</p>
                  </div>
                  <button 
                    onClick={() => setShowEditModal(true)}
                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-500 mb-1">First Name</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg">
                  {currentStudent.first_name}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Last Name</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg">
                  {currentStudent.last_name}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Student Id</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg">
                  {currentStudent.student_id}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Email</label>
                <div className="px-4 py-3 bg-gray-50 rounded-lg">
                  {currentStudent.email}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-500 mb-1">Date of Birth</label>
                <div className="px-4 py-3bg-gray-50 rounded-lg">
{new Date(currentStudent.date_of_birth).toLocaleDateString()}
</div>
</div>
<div>
            <label className="block text-sm text-gray-500 mb-1">Contact Number</label>
            <div className="px-4 py-3 bg-gray-50 rounded-lg">
              {currentStudent.contact_number}
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm text-gray-500 mb-1">Enrollment Date</label>
            <div className="px-4 py-3 bg-gray-50 rounded-lg">
              {new Date(currentStudent.enrollment_date).toLocaleDateString()}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-bold mb-4">My email Address</h3>
          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <Mail className="w-5 h-5 text-green-500" />
            <div>
              <p className="font-medium">{currentStudent.email}</p>
              <p className="text-sm text-gray-500">1 month ago</p>
            </div>
          </div>
        </div>

        <button 
          onClick={() => onNavigate('students')}
          className="mt-8 flex items-center gap-2 text-green-500 hover:text-green-600"
        >
          <ArrowLeft className="w-4 h-4" />
          Go back
        </button>
      </div>
    </div>
  </div>

  {showEditModal && (
    <AddStudentModal 
      student={currentStudent}
      onClose={() => setShowEditModal(false)} 
      onAdd={handleEdit}
    />
  )}
</div>
);
};
// Main App Component
function App() {
const [currentPage, setCurrentPage] = useState('landing');
const [selectedStudent, setSelectedStudent] = useState(null);
const handleNavigate = (page, student = null) => {
setCurrentPage(page);
if (student) setSelectedStudent(student);
};
return (
<div>
{currentPage === 'landing' && (
<LandingPage onNavigate={handleNavigate} />
)}
{currentPage === 'students' && (
<StudentsPage onNavigate={handleNavigate} />
)}
{currentPage === 'details' && selectedStudent && (
<StudentDetailsPage 
       student={selectedStudent} 
       onNavigate={handleNavigate}
     />
)}
</div>
);
}
export default App;