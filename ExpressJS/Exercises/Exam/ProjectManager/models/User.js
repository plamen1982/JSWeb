const mongoose = require('mongoose');
const encryption = require('../util/encryption');

/*
    Username – string (required), unique
    Password – string (required)
    First Name – string (required)
    Last Name – string (required)
    Teams – a collection of Teams
    Profile Picture – imageUrl string and choose a default
    Roles – array with roles ("User", "Admin")
*/

const userSchema = new mongoose.Schema({
    username: { type: mongoose.Schema.Types.String, required: true, unique: true },
    hashedPass: { type: mongoose.Schema.Types.String, required: true },
    firstName: { type: mongoose.Schema.Types.String, required: true },
    lastName: { type: mongoose.Schema.Types.String, required: true },
    salt: { type: mongoose.Schema.Types.String, required: true },
    roles: [{ type: mongoose.Schema.Types.String }],
    profilePicture: { type: mongoose.Schema.Types.String, default: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4QDw0NDg0NDQ0NDg0ODQ0NDQ8NDQ0PFhEWFhURExUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMCB//EADoQAQACAQEEBgcGBAcAAAAAAAABAgMRBAUhQQYSMVFhcRMiMjNyobEjUoKRksFCYoGyFBVTc6LR8P/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9xAAAAAAAABX703lGKOrXjkmOEcq+Mg7cuWtY1taKx4yrdr3zjiJjHaZty9XWsqHNmveete02nx5eTzB77VtPpLdfqxS3Pq66TPe+Y2nJHZkvH4peQD2/xeX/AFcn65euPeWevZktPxet9XIAuNn37aOGSkWjvrwlbbLtuPL7FuPOs8JhkU0tMTExMxMdkxwkG2FPuve3W0x5eFuytuVvNcAAAAAAAAAAAAAAAAAAiZ048oBGW8VrNp4RWJmWO2jNN7WvPbadXbvbeU5JmleGOJ/VPfPgrgAAAAAAAAIlqd17bXJSsTaPSRGlo5+bLJpeazFqzMTHGJgG2HNu/afSY6359lvOHSAAAAAAAAAAAAAAA4t8ZJrhvpz0h2q7f3uZ+KoMwlCQAAAAAAAAAAaDo5b1Lx3Wj5rdT9G49TJ8UfRcAAAAAAAAAAAAAAAODfcfYX8NJd7k3rXXDl+EGSShIAAAAAAAAAANH0er9lM99pWjg3HXTBXxmZd4AAAAAAAAAAAAAADy2uuuO8d9Z+j1VG/tqvTqVpM160TMzHbPgDPJEAJQAlAAlAAkQAkQkGt3XXTDij+WHUo9wbVebWx2tM1iutdeS8AAAAAAAAAAAAAAAUfSSvup+KF4rN/4tcXW+5aJ/oDNCUAAAAAAAAAkQkFt0cr9pee6n7tCqOjmLSl7/etpH9FuAAAAAAAAAAAAAAA89oxRelqT/FEw9AGJyUmszWe2szEvlqN57vpet7RXTJFZmJjnMcmXAAAAAAAABJEfmhoNzbvp1K5b11tMzNdeyI5AsNgw9THSndEa+boAAAAAAAAAAAAAAAAABkd5YPR5b15a618pa5S9I8HCmSOXqz+wKEAAAAAAAHrs2Kb3rSP4piGxpWKxFY7KxER5Qoujuz62tknsrwr5r8AAAAAAAAAAAAAAAAAAByb1pE4cmvKszHnDrcm9p0wZfGswDJAAAAAAAA1W5axGCmnPWZ83cr9xTrgr4TaPmsAAAAAAAAAAAAAAAAAAAFfvy2mC3jNYWCq6Qz9lEd9oBnUJAAAEJAQkAaLo7b7K0d1pWqm6Nz6uT4o+i5AAAAAAAAAAAAAAAHze9a8bTER4zo4c++MNeETN5/ljgCweebNWkda9orHjKjz79vPClYp4z60/9KzNmvedb2m0+IL3Z96+kzVpSNMfrazPbbhLv23Zoy0mk8Neye6Wd3L7/H+L+2WpBjdq2a+O01vGk8p5THfDybDa9lplr1bx5TzrPfDL7bsd8VtLcYn2bcpBzgAAAPvBhte0VrGsy+9l2a+S0VrHnPKI8Wn2HYqYq6V42n2rT2yBu7ZIxUivbM8bT3y49s3lbFmmsx1sc1rOnOPGFszfSH30fBH1kF/s+00yR1qWi0fOPOHqxWPJas61maz3xOiy2ffmSvC8ReO/2bA0YrsG+cNu2ZpP80cPzd2PLW3Gtot5SD7AAAAAAeeXPSnG9q185iGXzbzz27ckx4V9X6OSZ14zxkGjz77xV9mLXnwjSPmrs++s1vZ0pHhxn81aA+8mW1uNrTbzl8AAADt3N7/H+L+2WqZPdM/b4/P9msAee0YK5KzW8axPy8noAye8dgthnvpPs2/afFxtrlx1tE1tGtZ7YlmN6bFGK2kTrW3GI5x5g4nRsOx3y26teER7VuVYTsGy+lvFNYrHbPfp4NVs+CuOsUrGkR8/EHxsmy0xVitY855zPfL3ABnOkXva/wC3H1lo2b6Q++j4I+sgrAAE0vNeNZmJ8J0QA78G981e2YvHdaOP5rHBv2k8L0tWe+PWhnwGxwbXjv7F6z4a8fyezEOrDvDNT2ck6d0+tHzBrRmf86z99f0wArgAAAAAAAdO7Z0zYvjrDXMbsltMmOe69J+cNkABIOXeG21xV1njafZr3yyufNa9pvadZn/2j33nOT0lvS8Lco5dXlp4OUE0vNZi1Z0mJ1iWo3Xt8Za6TwyV9qO/xhlntsXpPSV9Fr19eGn7+ANiIprpGumuka6dmqQGa3/P234atKy2+r657+HVj/jAOEAAAAAAAAAAAAAAAAABstky9elL/erE/wBWNX/R3aNa2xz21nWPKQXAAOfbdkplrpbhp2W51ZHJXSZiJ10mY172l33tXUx9WPavwjy5yzIENXu3Y6Y6RNfWm0RM37/LwZRoNwbX1qzit2141+HuBbgA+b2iIm09kRMyxufJ1r3v960z+ctBv/aerj6kduTt+HmzgAAAAAAAAAAAAAAAAAACy6P++/DIA0oAM/0k9vH8P7qeEgIlY7h9/Xyt9ABpwAZ3pF7ynwqoAAAAAAAAAAAf/9k=' },
    teams: [{ type: mongoose.Schema.Types.ObjectId }]
});

userSchema.method({
    authenticate: function (password) {
        return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
    }
});

const User = mongoose.model('User', userSchema);

User.seedAdminUser = async () => {
    try {
        let users = await User.find();
        if (users.length > 0) return;
        const salt = encryption.generateSalt();
        const hashedPass = encryption.generateHashedPassword(salt, 'Admin');
        return User.create({
            username: 'Admin',
            firstName: 'Admin',
            lastName: 'Admin',
            salt,
            hashedPass,
            roles: ['Admin']
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = User;
