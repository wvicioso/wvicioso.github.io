# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Project.create([
  {
    title: "Dapr",
    subTitle: "Always know how to dress for any weather.",
    img: 'dapr.png',
    tech: "React-Native, The-Weather-Channel API",
    body: "Mobile weather app that suggests fashionable and weather-appropriate clothing while still informing you of everything you need to know about current weather conditions.",
    platform: "mobile",
    link: "https://github.com/wvicioso/dapr"
  },
  {
    title: "Temo",
    subTitle: "Bringing emotions to text.",
    img: 'temo.png',
    tech: "React-Native, SendBird API, Microsoft Cognitive Services Text-Analytics API, Rails API",
    body: "Mobile messaging app that visually indicates the sentiment value of a text-message while you're typing it. As project-lead, it was my responsibility to delegate tasks, prioritize features, and make executive design decisions as my team and I tackled the challenge of building a functional mobile app in 7 days. This was part of the final projects at Dev Bootcamp NYC.",
    platform: "mobile",
    link: "https://github.com/nyc-bobolinks-2016/TemoApp"
  },
  {
    title: "HackOverflow",
    subTitle: "StackOverflow clone.",
    img: 'hack.jpg',
    tech: "Sinatra with Ruby, Jquery, PostgreSQL, Heroku",
    body: "The motive of this project was to practice updating the UI dynamically as well as forming relational associatons in the database.",
    platform: "web",
    link: "https://dbc-hackoverflow.herokuapp.com/"
  },
  {
    title: "Dapr Web",
    subTitle: "Always know how to dress for any weather.",
    img: 'dapr-web.png',
    tech: "Ruby on Rails",
    body: "Web App version of DAPR built on Rails.",
    platform: "web",
    link: "https://dapr-web.herokuapp.com/"
  },
  {
    title: "Tic Tac Toe",
    subTitle: "Track your tic-tac-toe skill!",
    img: 'tic.png',
    tech: 'Ruby on Rails, ReactJs, PostgreSQL, Heroku',
    body: "This platform allows users to play tic-tac-toe. If a user created an account, they would be able to track game stats as well as pause games which can be resumed later. My main responsibility for this project was to build the competitative algorithm users play against.",
    platform: "web",
    link: "https://tic-or-treat.herokuapp.com/"
  },
])
