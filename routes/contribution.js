const express = require('express');
const router = express.Router();
const Contribution = require('../models/Contribution');

// POST /api/contributions
router.post('/', async (req, res) => {
  try {
    const doc = new Contribution(req.body);
    const saved = await doc.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET /api/contributions/issue/:issueId
router.get('/issue/:issueId', async (req, res) => {
  try {
    const list = await Contribution.find({ issueId: req.params.issueId }).sort({ date: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/contributions/user/:email
router.get('/user/:email', async (req, res) => {
  try {
    const list = await Contribution.find({ email: req.params.email }).sort({ date: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
