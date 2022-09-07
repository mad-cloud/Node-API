import express from 'express';
const router = express.Router();
let users = []
router.get('/', (req, res) => {
    console.log(users)
    res.send(users);
});
router.post('/', (req, res) => {
    const user = req.body;//have access to body of post data
    users.push({ ...user, id: new Date().getTime().toString() })
    res.send(`User with the name ${user.firstName} added`);
})
router.get('/:id', (req, res) => {//params will have access to whatever written after /
    const id = req.params.id;
    const foundUser = users.find((user) => user.id == id)//if user.id is equal to passed id
    res.send(foundUser)
})
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    users = users.filter((user) => user.id != id);//display the data when user.id is not equal to passed id
    res.send(`User with the id ${id} deleted`)
})
export default router;