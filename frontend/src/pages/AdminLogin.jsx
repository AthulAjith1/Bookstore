// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function AdminLogin() {
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     // Basic hardcoded credentials
//     if (email === 'athul@bookstore.com' && password === 'athul123') {
//       alert('Login successful!');
//       navigate('/admin/dashboard');
//     } else {
//       alert('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
//       <div className="row w-100">
//         <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
//           <div className="card shadow-lg rounded-lg p-4">
//             <div className="card-body">
//               <div className="text-center mb-4">
//                 <img
//                   src="/placeholder-logo.svg"
//                   alt="Bookstore Logo"
//                   className="mb-3"
//                   style={{ maxWidth: '80px' }}
//                 />
//                 <h2 className="card-title text-primary">Admin Login</h2>
//               </div>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">
//                     Email address
//                   </label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     name="email"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     name="password"
//                     required
//                   />
//                 </div>
//                 <div className="d-grid gap-2 mb-3">
//                   <button type="submit" className="btn btn-primary">
//                     Admin Login
//                   </button>
//                 </div>
//               </form>
//               <p className="text-center text-muted small mt-3">
//                 <strong>Demo login:</strong> admin@bookstore.com / admin123
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === 'admin@bookstore.com' && password === 'admin123') {
      alert('Admin login successful');
      navigate('/admin/dashboard');
    } else {
      alert('Invalid admin credentials');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark mb-0">Bookstore</h2>
          <p className="h4 text-primary mt-1">Admin Login</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-2">
            Admin Login
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary w-100"
            onClick={() => navigate('/login')}
          >
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
