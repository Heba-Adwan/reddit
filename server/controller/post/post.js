const { addPostQuery, getPostQuery } = require('../../database');

const addPostC = (req, res, next) =>{
  const { userId } = req.user
  addPostQuery({...req.body, user_id: userId})
    .then((data) => {
      if (data.rows[0]['?column?'] === 'Successfully') {
        res.status(200).json({
          error: false,
          message: 'successfully',
        });
      }
    }).catch((error) => next(error));

}

const getPostC = (req, res, next) => {
    getPostQuery()
    .then((data) => {
      res.status(200).json({
        error: false,
        data: data.rows,
      });
    }).catch((error) => next(error))
}

module.exports = {
  addPostC,
  getPostC,
};
