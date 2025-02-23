function AuthModal({ isOpen, onClose, mode = 'signin' }) {
    const [authMode, setAuthMode] = React.useState(mode);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const validateForm = () => {
        if (!email.endsWith('@gmail.com')) {
            setError('Only Gmail accounts are allowed');
            return false;
        }
        if (password.length < 8) {
            setError('Password must be at least 8 characters long');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            if (authMode === 'signup') {
                await signUp(email, password, username);
            } else {
                await signIn(email, password);
            }
            onClose();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div data-name="auth-modal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">
                        {authMode === 'signup' ? 'Create Account' : 'Sign In'}
                    </h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {authMode === 'signup' && (
                        <div>
                            <label className="block text-gray-700 mb-2">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-2 border rounded focus:border-blue-500 focus:outline-none"
                                required
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-gray-700 mb-2">Email (Gmail only)</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded focus:border-blue-500 focus:outline-none"
                            required
                            pattern=".*@gmail\.com$"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Password (min. 8 characters)</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border rounded focus:border-blue-500 focus:outline-none"
                            required
                            minLength="8"
                        />
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm">{error}</div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                    >
                        {loading ? 'Processing...' : (authMode === 'signup' ? 'Sign Up' : 'Sign In')}
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <button
                        onClick={() => setAuthMode(authMode === 'signup' ? 'signin' : 'signup')}
                        className="text-blue-600 hover:text-blue-800"
                    >
                        {authMode === 'signup' 
                            ? 'Already have an account? Sign In' 
                            : "Don't have an account? Sign Up"}
                    </button>
                </div>
            </div>
        </div>
    );
}
