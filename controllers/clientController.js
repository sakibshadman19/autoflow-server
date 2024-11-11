// controllers/clientController.js
const Client = require('../models/client');

// Create Client
const createClient = async (req, res) => {
  try {
    const { email, customerName, phoneNumber, carModel } = req.body;
    const newClient = new Client({ email, customerName, phoneNumber, carModel });
    await newClient.save();
    res.json(newClient);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Fetch all clients for the technician page
const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Fetch client by ID
const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findById(id);
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update client status
const updateClientStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const client = await Client.findByIdAndUpdate(id, { status }, { new: true });
    res.json(client);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Save client data (alignment, fluids, etc.)
const saveClientData = async (req, res) => {
  try {
    const { clientId, alignmentSteeringSuspension, fluids, generalServiceItems, status, vehiclePictures } = req.body;
    const newClientData = await Client.findByIdAndUpdate(clientId, {
      clientId,
      alignmentSteeringSuspension,
      fluids,
      generalServiceItems,
      status,
      vehiclePictures
    }, { new: true });

    await newClientData.save();

    res.status(201).json({ message: 'Client data saved successfully!' });
  } catch (error) {
    console.error('Error saving client data:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createClient,
  getAllClients,
  getClientById,
  updateClientStatus,
  saveClientData
};
