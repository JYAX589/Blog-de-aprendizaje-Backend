import {UserSchema} from "../users/user.model.js";

export const register = async (req, res) => {
    try {
        const data = req.body;

        let profilePicture = req.file ? req.file.filename : null;

        const user = await Usuario.create(
            {
                name: data.name,
                email: data.email,
                profilePicture: profilePicture
            }
        )

        res.status(200).json({
            message: "User registered successfully",
            user: user
        });
    } catch (error) {
       res.status(500).json({
            message: "Error registering user",
            error: error.message
        }); 
    }
}