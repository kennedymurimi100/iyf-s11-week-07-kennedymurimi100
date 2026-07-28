export function validateUser(userData) {
    if (!userData.email.includes("@")) {
        throw new Error("Invalid email");
    }

    if (userData.age < 18) {
        throw new Error("Must be adult");
    }

    return true;
}

export function normalizeUser(userData) {
    return {
        ...userData,
        email: userData.email.toLowerCase(),
        name: userData.name.trim()
    };
}

export async function createUser(userData) {
    validateUser(userData);

    const normalizedUser = normalizeUser(userData);

    // Simulate saving to a database
    await Promise.resolve();

    // Simulate sending a welcome email
    await Promise.resolve();

    return normalizedUser;
}