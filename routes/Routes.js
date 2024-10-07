const express = require('express');
const router = express.Router();
const SimCard = require('../models/SimCard');

//Activtes the SIM card
router.post('/activate', async (req, res) => {
  const { sim_number } = req.body;
  
  if (!sim_number) 
    return res.status(400).json({ error: 'SIM number is required' }); //default display if simcard is not entered
    let simCard = await SimCard.findOne({ sim_number });
        if (!simCard) 
            return res.status(404).json({ error: 'SIM card not found' }); //displayed if simcard is not found
            if (simCard.status === 'active') 
                return res.status(400).json({ error: 'SIM is already active' }); //displayed only if simcard is STRICTLY active
            simCard.status = 'active';
            simCard.activation_date = new Date();

  await simCard.save(); //saves simcard in db with status as "inactive" and date of activation

  res.json({ message: 'SIM activated successfully' }); //success message
});

// Deactivates SIM card (I hope)
router.post('/deactivate', async (req, res) => {
  const { sim_number } = req.body;
    if (!sim_number) 
        return res.status(400).json({ error: 'SIM number is required' });
        let simCard = await SimCard.findOne({ sim_number });
    if (!simCard) 
        return res.status(404).json({ error: 'SIM card not found' });
    if (simCard.status === 'inactive') 
        return res.status(400).json({ error: 'SIM is already inactive' }); //displayed if simcard is inactive

        simCard.status = 'inactive';
        simCard.activation_date = null;

    await simCard.save(); // saves in db as inactive and date as null

  res.json({ message: 'SIM deactivated successfully' }); //failure messagfe
});

// Gets SIM details (Not sure)
router.get('/sim-details/:sim_number', async (req, res) => {
  const { sim_number } = req.params;

  let simCard = await SimCard.findOne({ sim_number });

  if (!simCard) 
    return res.status(404).json({ error: 'SIM card not found' }); 

  res.json(simCard);
});

module.exports = router; //exports modules to the router

