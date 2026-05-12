import { Router } from 'express';
import { getAllLocations, getLocationById } from '../models/location.js';

const router = Router();

router.get('/', async (_req, res, next) => {
  try {
    res.json(await getAllLocations());
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const location = await getLocationById(req.params.id);

    if (!location) {
      res.status(404).json({ message: 'Location not found' });
      return;
    }

    res.json(location);
  } catch (error) {
    next(error);
  }
});

export default router;
