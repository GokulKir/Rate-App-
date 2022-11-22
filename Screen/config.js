import Realm from 'realm' ;

class Person extends Realm.Object {}

Person.schema = {
    name : "Person",
    properties : {
      recordID : 'string',
          Rate : 'string',
   phoneNumber : 'string',
        Review : "string",
    },
    primaryKey :"recordID"
}


let realm = new Realm({schema:[Person] , schemaVersion : 4}) ;

let  getAllRating = () =>{

    return realm.Object('Person')


}

let AddContact = ( _recordID , _Rate , _phoneNumber, _Review ) =>{

   realm.write(()=>{
     let  persone  = realm.create('Person' , {

         recordID : _recordID,
         Rate : _Rate ,
         phoneNumber : _phoneNumber ,
         Review : _Review ,

     })
   })

}

  let deleteAllData = () =>{
    realm.write(()=>{
        realm.delete(getAllRating)
    })
  }


export default  realm

export {getAllRating , AddContact , deleteAllData}