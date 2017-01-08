# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Project.create([
  {
    title: "Temo",
    img: 'temo.png',
    body: "Built with React-Native and Microsoft's Text-Analytics API, Temo is a mobile messaging app that visually indicates the sentiment value of a text-message while you're typing it. As project-lead, it was my responsibilty to delegate tasks, prioritize features, and make executive design decisions as my team and I tackled the challenge of building a funcitonal mobile app in 7 days. This was part of the final projects at Dev Bootcamp NYC.",
    platform: "mobile",
    link: "https://github.com/nyc-bobolinks-2016/TemoApp"
  },
  {
    title: "HackOverflow",
    img: 'hack.jpg',
    body: "This is a StackOverflow clone built in Sinatra with Ruby, Jqeury, and Postgres. The motive of this project was to practice updating the UI dynamically as well as forming relational associatons in the database.",
    platform: "web",
    link: "https://dbc-hackoverflow.herokuapp.com/"
  },
  {
    title: "Dapr Web",
    img: 'dapr-web.png',
    body: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
    platform: "web",
    link: ""
  },
  {
    title: "Tic Tac Toe",
    img: 'tic.png',
    body: "Built on Rails with ReactJS, this platform allows users to play tic-tac-toe. If a user created an account, they would be able to track game stats as well as pause games which can be resumed later. My main responsibilty for this project was to build the competitative algorithm users play against. This game is live on Heroku.",
    platform: "web",
    link: "https://tic-or-treat.herokuapp.com/"
  },
  {
    title: "Dapr",
    img: 'dapr.png',
    body: "Built with React-Native and the the-weather-channel API, DAPR is a mobile weather app that suggests fashionable and weather-appropriate clothing while still informating you of everything you need to know about current weather conditions",
    platform: "mobile",
    link: "https://github.com/wvicioso/dapr"
  }
])
