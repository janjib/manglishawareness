import { useEffect, useState } from "react";
import { projectFirestore } from "../config";
const GetData = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribe = projectFirestore
      .collection(collectionName)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let documents = [];
        snapshot.forEach((shot) => {
          documents.push({ ...shot.data(), id: shot.id });
        });
        setDocs(documents);
      });
    return () => unsubscribe();
  }, [collectionName]);

  return { docs };
};

export default GetData;
