import { createUser } from "./user.js";
import { showSuccess, showError } from "./ui.js";

const user = {
    name: " Kennedymurimi100 ",
    email: "kennedymurimi100@email.com",
    age: 26
};

async function handleCreateUser() {
    try {
        const createdUser = await createUser(user);

        console.log(createdUser);

        showSuccess("User created!");

    } catch (error) {
        showError(error.message);
    }
}

handleCreateUser();