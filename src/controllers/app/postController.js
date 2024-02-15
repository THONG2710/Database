const postService = require('../../services/app/postService');

const getAllPostController = async () => {
    try {
        return await postService.getAllPost();
    } catch (error) {
        console.log('get all post controller error: ' + error);
    }
};

module.exports = {getAllPostController}