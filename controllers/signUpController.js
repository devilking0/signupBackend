const signUpModel = require('../models/signUpModel')

exports.signUp = async(request, response)=>
{
    try
    {
        const {name, email, password} = request.body;
        const signUpData = await signUpModel.create({name:name, email:email, password: password})

        response.json(
            {
                userData:signUpData,
                message:"signUp Data Saved"
            }
        )

    }
    catch(err)
    {
        console.error(err)
        console.log(err)
        response.json(
            {
                error:err.message,
                message:"could not singUp"
            }
        )
    }
}
exports.getUserData = async(request, response)=>
{
    try
    {
        const userData = await signUpModel.find({})
        response.json(
            {
                userData:userData,
                message:"user data retrived"
            }
        )

    }
    catch(err)
    {
        console.error(err)
        console.log(err)
        response.json(
            {
                error:err.message,
                message:"could not fetched the data"
            }
        )
    }
}