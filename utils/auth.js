async function signUp(email, password, username) {
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        await userCredential.user.updateProfile({
            displayName: username
        });
        return userCredential.user;
    } catch (error) {
        throw new Error(`Failed to sign up: ${error.message}`);
    }
}

async function signIn(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        throw new Error(`Failed to sign in: ${error.message}`);
    }
}

async function signOut() {
    try {
        await auth.signOut();
    } catch (error) {
        reportError(error);
        throw new Error(`Failed to sign out: ${error.message}`);
    }
}
