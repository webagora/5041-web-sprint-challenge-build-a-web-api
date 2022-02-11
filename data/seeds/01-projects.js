// DO NOT CHANGE THIS FILE
exports.seed = async function (knex) {
  await knex('projects').insert([
    {
      name: 'Complete Node.js and Express Challenge',
      description:
        'Build and Awesome API Using Node.js and Express to Manage Projects and Actions GTD Style!',
    },
    {
      name: "Complete Sprint Challenge",
      description: "Build and Authentication token system to manage the users and their rols!"
      }
  ]);
};
