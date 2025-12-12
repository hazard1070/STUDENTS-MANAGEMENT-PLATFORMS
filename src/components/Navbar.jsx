import StudentProfileUpload from './StudentProfileUpload';

function Navbar({ studentId }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <div className="text-2xl font-bold text-blue-600">STUDENTSYNC</div>
      
      <div className="flex items-center space-x-4">
        {/* Add other navbar items here if needed */}
        <StudentProfileUpload studentId={studentId} />
      </div>
    </nav>
  );
}

export default Navbar;
