import posts from "./tuits.js";
let tuits = posts;

const currentUser = {
    "username": "NASA",
    "handle": "@nasa",
    "image": "nasa.svg",
    "foo": "bar"
};

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.liked = false;
    newTuit.handle = currentUser.handle
    newTuit.username = currentUser.username
    newTuit.image = currentUser.image
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuits  = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params['tid'];
    const updates = req.body;
    const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}


const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params['tid'];
    tuits = tuits.filter((t) =>
        t._id !== tuitdIdToDelete);

    tuits.map(t =>
    {
        console.log(typeof t._id, typeof tuitdIdToDelete,  t._id === tuitdIdToDelete);
        return 0;
    })
    res.sendStatus(200);
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
