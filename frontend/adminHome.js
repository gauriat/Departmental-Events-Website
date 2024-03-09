import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './navbar/navbar1';

function AdminHome() {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  const handleDownloadRegister = async (registerNumber) => {
    try {
      // Fetch register details from the backend based on registerNumber
      const response = await fetch(`http://localhost:8081/downloadRegister${registerNumber}`);
      const data = await response.json();
  
      // Convert the data to a JSON string
      const jsonData = JSON.stringify(data);
  
      // Create a Blob with the fetched data
      const blob = new Blob([jsonData], { type: 'application/json' });
  
      // Create an anchor element with a download attribute
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `register${registerNumber}_details.json`;
  
      // Append the anchor element to the document and trigger a click event
      document.body.appendChild(a);
      a.click();
  
      // Remove the anchor element from the document
      document.body.removeChild(a);
    } catch (error) {
      console.error(`Error downloading Register${registerNumber} details:`, error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4" style={{ paddingTop: '80px' }}>
        <h1>Welcome to the Admin Home Page</h1>
        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Register</h5>
                <p className="card-text">If you don't have an account, you can register here.</p>
                <Link to="/register" className="btn btn-primary">
                  Register
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Show Registered Participants</h5>
                <p className="card-text">Display registered participants of event Hackathon and Coding Competition.</p>
                <button onClick={() => handleRedirect('/display-1')} className="btn btn-primary">
                  Click Here
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Show Registered Participants</h5>
                <p className="card-text">Display registered participants of event Social and Cultural Event.</p>
                <button onClick={() => handleRedirect('/display-2')} className="btn btn-primary">
                  Click Here
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Show Registered Participants</h5>
                <p className="card-text">Display registered participants of event Career Development Workshop.</p>
                <button onClick={() => handleRedirect('/display-3')} className="btn btn-primary">
                  Click Here
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Show Registered Participants</h5>
                <p className="card-text">Display registered participants of event Industry Visit.</p>
                <button onClick={() => handleRedirect('/display-4')} className="btn btn-primary">
                  Click Here
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Add Event</h5>
                <p className="card-text">Add a new event to the system.</p>
                <button onClick={() => handleRedirect('/addEvent')} className="btn btn-primary">
                  Click Here
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Download Registeration Details</h5>
                <p className="card-text">Download details for different registeration of event Hackathon and Coding Competition.</p>
                <button onClick={() => handleDownloadRegister(1)} className="btn btn-primary">
                  Download Registeration1 Details
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Download Registeration Details</h5>
                <p className="card-text">Download details for different registeration of event Social and Cultural Event.</p>
                <button onClick={() => handleDownloadRegister(2)} className="btn btn-primary">
                  Download Registeration2 Details
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Download Registeration Details</h5>
                <p className="card-text">Download details for different registeration of event Career Development Workshop.</p>
                <button onClick={() => handleDownloadRegister(3)} className="btn btn-primary">
                  Download Registeration3 Details
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Download Registeration Details</h5>
                <p className="card-text">Download details for different registeration of event Industry Visit.</p>
                <button onClick={() => handleDownloadRegister(4)} className="btn btn-primary">
                  Download Registeration4 Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
