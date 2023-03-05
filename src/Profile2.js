import React from 'react';
import './Profile.css'

function Profile() {
  // State variables for user data and verification status
  const [userData, setUserData] = React.useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    jobTitle: 'Software Engineer',
    balance: 1000,
    verified: true,
  });

  const [verifications, setVerifications] = React.useState({
    id: { name: 'ID Verification', verified: true },
    email: { name: 'Email Verification', verified: true },
    mobile: { name: 'Mobile Verification', verified: false },
  });

  // Event handlers for modifying verification status
  const handleVerifyClick = (verificationName) => {
    setVerifications({
      ...verifications,
      [verificationName]: {
        ...verifications[verificationName],
        verified: true,
      },
    });
  };

  const handleUnverifyClick = (verificationName) => {
    setVerifications({
      ...verifications,
      [verificationName]: {
        ...verifications[verificationName],
        verified: false,
      },
    });
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className='profile-top'>
        {/* First container */}

        <div className='inner-container-top'>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            <img
              src="./img/pikachu.jpeg"
              alt="User profile"
              style={{ marginRight: '1rem' }}
            />
            <div>
              <h1>{userData.name}</h1>
              <p>{userData.email}</p>
              <button>Edit</button>
            </div>
            <div>
              {userData.verified && <span style={{ marginLeft: '1rem' }}>Verified</span>}
              <button style={{ marginLeft: '1rem' }}>{userData.jobTitle}</button>
            </div>
            </div>
        </div>

        {/* Second container */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }} className='profile-balance'>
          <div className='inner-container-balance'>
            <p className='balance'>MLCoin Balance: ${userData.balance}</p>
            <button className='buy-button'>Buy MLCoin</button>
            <button className='sell-button'>Withdraw MLCoin</button>
          </div>
        </div>

        {/* Third container */}
        <div className='profile-verification'>
          <h2>Verifications</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>{verifications.id.name}</p>
              <span>{verifications.id.verified ? 'Verified' : 'Not verified'}</span>
              <button onClick={() => handleVerifyClick('id')}>Verify</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>{verifications.email.name}</p>
              <span>{verifications.email.verified ? 'Verified' : 'Not verified'}</span>
              <button onClick={() => handleUnverifyClick('email')}>Modify</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>{verifications.mobile.name}</p>
              <span>{verifications.mobile.verified ? 'Verified' : 'Not verified'}</span>
              <button onClick={() => handleVerifyClick('mobile')}>Verify</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
