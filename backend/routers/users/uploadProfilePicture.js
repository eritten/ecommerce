const express = require("express");
const multer = require("multer");
const authenticateJWT = require("../../middleware/authMiddleware");
const User = require("../../models/user-model");

const router = express.Router();

// Configure multer storage options
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/profile_pictures/'); // Specify the destination directory for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Generate a unique filename
    }
});

const upload = multer({ storage: storage });

router.post("/upload-profile-picture", authenticateJWT, upload.single('profilePicture'), async (req, res) => {
    try {
        // Get user ID from JWT payload
        const userId = req.user.id;

        // Check if a file was uploaded
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        // Update user's profile with the uploaded file's URL/path
        const updatedUser = await User.update(
            { profileImageUrl: req.file.path },
            { where: { id: userId } }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Respond with success message and file path
        res.status(200).json({
            message: "Profile picture uploaded successfully",
            profileImageUrl: req.file.path
        });
    } catch (error) {
        console.error("Error uploading profile picture:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
