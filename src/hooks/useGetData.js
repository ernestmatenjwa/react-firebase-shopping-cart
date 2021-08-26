import React from "react";
import {db, auth } from '../Services/firebase'

const useGetData = () => {
  const [documents, setDocuments] = React.useState([]);

  
  React.useEffect(() => {
    auth.onAuthStateChanged(user=>{
      if(user){
        db.collection("todos").where("uid","==", user.uid)
      .get()
      .then((querySnapshot) => {
        let arr = [];
        querySnapshot.docs.map((doc) =>
          arr.push({ id: doc.id, value: doc.data() }) 
        );
        setDocuments(arr);
      });
      }

    })
    
  });
  return [documents];
};
export default useGetData;