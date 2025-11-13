const express = require('express');
const router = express.Router();
const Issue = require('../models/Issue');

// GET /api/issues - list all (latest first)
router.get('/', async (req, res) => {
  try {
    const issues = await Issue.find().sort({ date: -1 });
    res.json(issues);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/issues/:id
router.get('/:id', async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) return res.status(404).json({ message: 'Issue not found' });
    res.json(issue);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/issues
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const issue = new Issue(data);
    const saved = await issue.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /api/issues/:id
router.put('/:id', async (req, res) => {
  try {
    const updated = await Issue.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/issues/:id
router.delete('/:id', async (req, res) => {
  try {
    await Issue.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
