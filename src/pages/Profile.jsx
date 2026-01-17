import React from 'react';

function Profile() {
  const username = 'Norhtumbria Investor';

  return (
    <>
      <div className="relative">
        <h2 className="mt-12 mb-6 text-center text-2xl font-bold text-[#d9d9d9]">
          {username}
        </h2>
        <div className="bg-white rounded-xl shadow-md mx-4 p-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">About Invelog</h3>
          <p className="text-gray-700">
            Invelog - journaling app for investors to keep track of their investments and reflect 
            about their financial activity. Many investors diversify across different financial instruments 
            and platforms, making it harder to monitor their investments and profits. Invelog is a 
            centralized app where all the logs are in one place with the common user interface. Keeping 
            track of the buy or sell logs is an essential part for investors to analyze their strategies, learn 
            from past decisions, and set new goals.
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile;
