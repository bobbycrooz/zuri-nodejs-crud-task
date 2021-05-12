# welcome to zuri-nodejs-crud-task
# github link: https://github.com/bobbycrooz/zuri-nodejs-crud-task

## the app is hosted on heroku and the API endpoint is :
## https://nodejscrudapps.herokuapp.com/payload
___
  To get all payload in the database send a Get request to https://nodejscrudapps.herokuapp.com/payload
  result is: 
    {
     message:"",
     data:{
           name:"",
           email:"",
           country:"",
          }
    }
___

  To CREATE a new payload send a POST request with your body containing json data of message, data to https://nodejscrudapps.herokuapp.com/payload

  To UPDATE a payload send a PATCH request width the ID of the payload you want to update to https://nodejscrudapps.herokuapp.com/payload/id

  To DELETE a payload send a DELETE request width the ID of the payload you want to delete to https://nodejscrudapps.herokuapp.com/payload/id


