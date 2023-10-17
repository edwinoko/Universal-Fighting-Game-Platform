# Universal-Fighting-Game-Platform

## Quick summary
UFGP is a idea I had to combine something like pgstats.gg, smashladder and something like articles for the most popular fighting games. It is also a project where I get more hands on experience with certain python and javascript frameworks. The goal is to create a universal platform that most games can use to have some online presence.

In my head this whole project is split up into 3 parts.

Game domain - Basically everything surrounding a particular game like a frame data, patch information, art and models. This needs to be structured into a certain format that the UFGP can take and generate a site where interesting information can be shown. I need to workout the details but this is what I have right now.

UFGP - This is the actual platform that connects to all the different API's to eachother and stores user information in a database, is responsible for generating the site and also other functions. There needs to be some site templates to give different games a form of identity as wel. Integration to google accounts maybe.

Bots and Ladder - This is one of the main functionality where there we have a ladder system  specific to each fighting game but with a single account. With the ladder I was also playing with the idea of a money match  section. This could be with actual money or platform currency 

## Requirements for the projects
This is a quick overview of some of the things that i will need to realize this project. There are a few API's that i need to become familiar with. I also would like to build my own API that can be used to serve some front end and also create a bot that will give tournament information but also character details. I dont know how i will realize this properly but that is just part of the experience. 

- Challonge and stats.gg API
- Some bot framework
- Django/FastApi for the backend
- React (or some frontend framework)
- Some universal standard for the game domain
- Some Natural Language Processing for summarizing articles for the articles
- Jenkins for pipelines or some cloud setup with Kubernetes

This is all needs to be ironed out and segmented properly but this is just an overall view.


