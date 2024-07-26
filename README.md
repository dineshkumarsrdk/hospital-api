# Hospital patient management API
## _API for managing covid patients report_

## Project setup
The API is deployed on render(on free tier, hence expect a slow initial response) and the postman collection has the API templates
> Please go ahead and fork this Postman collection to test the APIs [API Collection](https://elements.getpostman.com/redirect?entityId=36794855-7c73ffc6-6f7f-4eeb-9e57-031e715d0d4f&entityType=collection) 

You can also clone this repository on your local machine and try it out.
```sh
git clone https://github.com/dineshkumarsrdk/hospital-api.git
```

Install the dependencies and start the server.

```sh
npm i
node index.js
```
Please remember to add the environment variables. You can always use the postman collection mentioned above, if you don't want to go through the trouble of setting up env variables

## Features

- Doctor registration and sign in 
- A signed in doctor can register a patient by providing the patient's name and mobile number
- Doctor can create test report for a patient
- Doctors can filter and view patient's report

## Tech

Tools used in this project

- [Node.js] - used for backend
- [Express] - framework used for node.js application
- [MongoDB](https://www.mongodb.com/docs/) - used for database
- [Mongoose](https://mongoosejs.com/docs/api/document.html) - library used for MongoDB connection
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - used for password encryption
- [JWT](https://www.npmjs.com/package/jsonwebtoken) - JsonWebToken used for user authentication
- [Postman](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a) - for API testing

***Thank You! Have a great day!***

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
