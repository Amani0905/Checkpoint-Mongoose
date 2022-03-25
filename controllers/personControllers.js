const Person =require('../models/personModel')
const array = [{name:"Amani" ,age : 33 , favoriteFoods : ["Fajitas" ,"Pates" , "Kafteji"]},
{name:"Ahmed" , age : 38 ,favoriteFoods : ["Pates" , "Burger" , "Soupe"]},
{name:"Asma" , age : 34 ,favoriteFoods : ["Couscous" , "Pizza" , "Soupe"]},
   {name:"Marwa", age:28, favoriteFoods: ["Burritos" , "Pates", "Lablebi"]} ,
    {name:"Balkis" , age : 28 ,favoriteFoods : ["Couscous" , "Tajin"]} ,
    {name:"Sami" , age : 38 ,favoriteFoods : ["Saumon" , "Pizza" , "Burger"]}]

             //@desc add a new person (Create Many Records )
            //@path POST/api/person
            //@access PUBLIC
const addPerson = (req,res)=>{
    Person.create(array)
    .then((data)=> res.json(data))
    .catch((err)=> {
        console.log(err);
        res.status(500).json({msg:'something went wrong'});
})
};
        // @desc get a person (Find all in Database(Find))
        // @path GET/api/person
        // @access PUBLIC
// const getPerson= (req,res)=>{
//     Person.find()
//     .then((data)=> res.json(data))
//     .catch((err)=> {
//         console.log(err);
//         res.status(500).json({msg:'something went wrong'});
// })
// };
       //find One Favorite Food:Fajitas
// const getPersons= (req,res)=>{
//     Person.findOne({favoriteFoods:"Kafteji"})
//     .then((data)=> res.json(data))
//     .catch((err)=> {
//         console.log(err);
//         res.status(500).json({msg:'something went wrong'});
// })
//  };

         //find person by ID
// const  id = "623d8f278ce58809a686af6c"
// const getPersons= (req,res)=>{
//     Person.findById(id)
//     .then((data)=> res.json(data))
//     .catch((err)=> {
//         console.log(err);
//         res.status(500).json({msg:'something went wrong'});
// })
//  };

            ///Perform Classic Updates by Running Find, Edit, then Save///
              //@desc update a person
        //@path PUT /api/person
       //@access PUBLIC

// const  id2 = "623d8f278ce58809a686af6d"
// const updatePerson= (req,res)=>{
//     Person.findOneAndUpdate({_id : id2} ,{$push: {favoriteFoods:"hamburger"}}, { new: true })
//     .then((data)=> res.json(data))
//     .catch((err)=> {
//         console.log(err);
//         res.status(500).json({msg:'something went wrong'});
// })
//     )};

    ///Find a person by Name and set the person's age to 20///
    const updatePerson= (req,res)=>
        Person.findOneAndUpdate({ name: "Marwa" }, { age: 20 }, { new: true })
        .then((data)=> res.json(data))
        .catch((err)=> {
            console.log(err);
            res.status(500).json({msg:'something went wrong'});
    });


                //Delete One Document Using model.findByIdAndRemove//
                 //@desc delete a person
        //@path DELETE/api/person
        //@access PUBLIC

//         const id3= "623d8f278ce58809a686af6c"
// const deletePerson= (req,res)=>{
//     Person.findByIdAndRemove({_id:id3})
//     .then((data)=> res.json(data))
//     .catch((err)=> {
//         console.log(err);
//         res.status(500).json({msg:'something went wrong'});
// })
// };
            ///Delete Many Amani///
const deletePerson= (req,res)=>{
    Person.deleteMany({name:"Amani"})
    .then((data)=> res.json(data))
    .catch((err)=> {
        console.log(err);
        res.status(500).json({msg:'something went wrong'});
})
};
  ////Chain Search Query Helpers to Narrow Search Results///
  
const getPersons= (req,res)=>{
    Person.find({favoriteFoods:"Burritos"})
    .sort({ name: 1 })
    .limit(2)
    .select({ age: false })
    .exec()
    .then((data)=> res.json(data))
    .catch((err)=> {
        console.log(err);
        res.status(500).json({msg:'something went wrong'});
})
 };


module.exports ={addPerson,getPersons,deletePerson,updatePerson}