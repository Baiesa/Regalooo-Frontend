const AccountPage = () => {
  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">My Account</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name:</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded" 
              placeholder="John Doe" 
            />
          </div>
          <div>
            <label className="block text-gray-700">Email:</label>
            <input 
              type="email" 
              className="w-full p-2 border border-gray-300 rounded" 
              placeholder="john@example.com" 
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number:</label>
            <input 
              type="tel" 
              className="w-full p-2 border border-gray-300 rounded" 
              placeholder="+1234567890" 
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Receive promotional emails</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Enable two-factor authentication</span>
            </label>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Update Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
