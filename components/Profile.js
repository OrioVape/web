function Profile({ user }) {
    if (!user) return null;

    return (
        <div data-name="profile" className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl">
                        {user.displayName ? user.displayName[0].toUpperCase() : 'U'}
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">{user.displayName}</h2>
                        <p className="text-gray-600">{user.email}</p>
                    </div>
                </div>

                <div className="border-t pt-6">
                    <h3 className="text-xl font-semibold mb-4">Account Information</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-600 mb-1">Email</label>
                            <p className="font-medium">{user.email}</p>
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-1">Username</label>
                            <p className="font-medium">{user.displayName}</p>
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-1">Account Created</label>
                            <p className="font-medium">{new Date(user.metadata.creationTime).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>

                <div className="border-t mt-6 pt-6">
                    <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
                    <div className="space-y-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                            Change Password
                        </button>
                        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors ml-4">
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
