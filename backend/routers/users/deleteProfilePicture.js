const express = require("express");
const fs = require("fs");
const path = require("path");
const authenticateJWT = require("../../middleware/authMiddleware");
const User = require("../../models/user-model");

const router = express.Router();

// Delete profile picture route
router.delete("/delete-profile-picture", authenticateJWT, async (req, res) => {
    try {
        // Get user ID from JWT payload
        const userId = req.user.id;

        // Find the user
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Get the current profile picture path
        const profileImagePath = user.profileImageUrl;

        if (!profileImagePath) {
            return res.status(400).json({ message: "No profile picture to delete" });
        }

        // Delete the profile picture file from the server
        fs.unlink(path.resolve(profileImagePath), async (err) => {
            if (err) {
                console.error("Error deleting profile picture file:", err);
                return res.status(500).json({ message: "Error deleting profile picture file" });
            }

            // Update the user's profile to remove the profile picture URL
            user.profileImageUrl = null;
            await user.save();

            // Respond with success message
            res.status(200).json({ message: "Profile picture deleted successfully" });
        });
    } catch (error) {
        console.error("Error deleting profile picture:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
