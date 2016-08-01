eventsApp.factory('eventData',function() {
  return {
    event: {
      name:"Angular Boot Camp",
      date: "7/29/2016",
      time: "10:11 am",
      location:{
        address: 'Google Headquarters',
        city: 'Mountain View',
        province: 'CA'
      },
      imageUrl: '/img/angularjs-logo.png',

      sessions: [
        {
          name: 'Directive Masterclass',
          creatorName: 'Bob Smith',
          duration: 2,
          level: 'Advanced',
          abstract:' something about directives',
          upVoteCount:0
        },
        {
          name: 'Scopes for fun and profit',
          creatorName: 'John Doe',
          duration: 1,
          level: 'Introductory',
          abstract: 'More stuff about scopes',
          upVoteCount:0
        },
        {
          name: 'Well behaved controllers',
          creatorName: 'Jane Doe',
          duration: 4,
          level: 'Intermidiate',
          abstract: 'Controllers here and there',
          upVoteCount:0
        }
      ]
    }
  };

});
