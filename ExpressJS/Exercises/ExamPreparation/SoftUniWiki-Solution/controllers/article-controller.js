const Article = require('../models/Article');
const Edit = require('../models/Edit');
const User = require('../models/User');

function validateArticle(article) {
  let errors = [];

  if (article.title === "") {
    errors.push("Title is required!");
  }

  if (article.content === "") {
    errors.push("Content is required!");
  }

  if (errors.length > 0) {
    return errors;
  }

  return false;
}

module.exports = {
  createGet: (req, res) => {
    res.render("article/create");
  },
  createPost: (req, res) => {
    const articleData = req.body;

    const editData = {
        author: req.user._id,
        content: articleData.content,
    }

    const errors = validateArticle(articleData);
    if(errors) {
        res.locals.globalError = errors.join('\n');
        res.render('article/create');
        return;
    }

    Promise.all([ Article.create(articleData), Edit.create(editData) ])
        .then(( [ article, edit ] ) => {

            //add id's to different records
            edit.article = article._id;
            article.edits.push(edit._id);
            req.user.edits.push(edit._id);

            //find by these id's and update records
            return Promise.all([
                User.findByIdAndUpdate(req.user._id, req.user),
                Article.findByIdAndUpdate(article._id, article),
                Edit.findByIdAndUpdate(edit._id, edit),
            ])
            .then(() => {
                res.redirect('/');
            })
            .catch(console.error)
        })
  },
  getAll: (req, res) => {
      Article
        .find()
        .sort({ title: 'ascending' })
        .select('_id title')
        .then(articles => {
            res.render('article/all-articles', { articles });
        })
  },
  displayArticle: (req, res) => {
      const { id } = req.params;
      Article
        .findById(id)
        .populate('edits')
        .then(article => {
            const edits = article.edits;
            let splitedContent = edits[edits.length - 1]
                                        .content
                                        .split('\r\n\r\n');
            article.splitedContent = splitedContent;
            res.render('article/article', article)
        })
        .catch(console.error);
  },
  editGet: (req, res) => {
      const { id } = req.params;
      Article.findById(id)
             .populate({
                 path: 'edits'
             })
             .then((article) => {
                 if(article.isLocked && req.user.roles.indexOf('Admin') === -1) {
                     res.locals.globalError = 'Article is locked!';
                     res.redirect('/');
                     return;
                 }
                 article.content = article.edits[article.edits.length - 1].content;
                 res.render('article/edit', article);
             })
  },
  editPost: (req, res) => {
      const articleId = req.params.id;
      const content = req.body.content;

    const editBody = {
        author: req.user._id,
        article: articleId,
        content,
      }
      Promise.all([Article.findById(articleId), Edit.create(editBody)])
                .then(([article, edit]) => {
                    req.user.edits.push(edit._id);
                    article.edits.push(edit._id);

                    return Promise.all([
                        User.findByIdAndUpdate(req.user._id, req.user),
                        Article.findByIdAndUpdate(article._id, article)
                    ])
                    .then(() => {
                        res.redirect(`/article/details/${articleId}`)
                    })
                    .catch(console.error);
                })
  }
};
