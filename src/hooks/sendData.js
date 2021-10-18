import { projectFirestore } from "../config";

export const sendData = (quoteObject) => {
  const dataRef = projectFirestore.collection("quotes");

  dataRef.add(quoteObject);
};
