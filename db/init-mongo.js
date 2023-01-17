db.createUser({
  user: "Lotarc",
  pwd: "gprf234ref",
  roles: [
    {
      role: "readWrite",
      db: "moneyTracker",
    },
  ],
});
