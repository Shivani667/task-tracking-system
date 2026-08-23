const express = require('express');
const Team = require('../models/Team');
const auth = require('../middleware/auth');

const router = express.Router();

// Create a new team
router.post('/', auth, async (req, res) => {
  try {
    const { name } = req.body;

    const team = new Team({
      name,
      members: [req.user], // creator is first member
      createdBy: req.user
    });

    await team.save();
    res.status(201).json(team);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Join a team
router.post('/:id/join', auth, async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) return res.status(404).json({ message: 'Team not found' });

    if (!team.members.includes(req.user)) {
      team.members.push(req.user);
      await team.save();
    }

    res.json({ message: 'Joined team successfully', team });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add member to team (by admin/creator)
router.post('/:id/add-member', auth, async (req, res) => {
  try {
    const { memberId } = req.body;
    const team = await Team.findById(req.params.id);
    if (!team) return res.status(404).json({ message: 'Team not found' });

    if (!team.members.includes(memberId)) {
      team.members.push(memberId);
      await team.save();
    }

    res.json({ message: 'Member added successfully', team });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
