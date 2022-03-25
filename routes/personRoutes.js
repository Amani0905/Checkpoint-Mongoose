const express =require ('express');
const { addPerson, deletePerson, updatePerson, getPersons } = require('../controllers/personControllers');
const router = express.Router()

router.post('/',addPerson);
router.get('/',getPersons);
router.delete('/:id',deletePerson);
router.put('/:id',updatePerson); 

module.exports= router;