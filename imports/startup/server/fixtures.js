import '../../api/channels/channels.js';

Meteor.startup(() => {
  ["general", "random"].forEach(name => Channels.upsert({ _id: name }, {
    name: name,
    public: true
  }));
});
