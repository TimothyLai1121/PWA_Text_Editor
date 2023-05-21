
import { openDB } from 'idb'; // import the openDB method from the idb package //

const initdb = async () => // create a method called initdb that will be called when the app starts //
  openDB('jate', 1, { // openDB takes 3 arguments: the name of the database, the version, and an object with a method called upgrade //
    upgrade(db) { // upgrade is called when the database is first created or when the version number is incremented //
      if (db.objectStoreNames.contains('jate')) { // check if the database already exists //
        console.log('jate database already exists'); // if it does, log a message and
        return; 
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true }); // if it doesn't, create a new object store called jate //
      console.log('jate database created'); // log a message
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => { // create a method called putDb that takes a single argument called content //
  const db = await initdb(); // call initdb to get a reference to the database //
  const tx = db.transaction('jate', 'readwrite'); // create a transaction on the jate object store //
  const store = tx.objectStore('jate'); // get a reference to the object store //
  return store.put(content); // add the content to the object store //
};


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => { // create a method called getDb that takes no arguments //
  const db = await initdb(); // call initdb to get a reference to the database //
  const tx = db.transaction('jate', 'readonly'); // create a transaction on the jate object store //
  const store = tx.objectStore('jate'); // get a reference to the object store //
  return store.getAll(); // get all the content from the object store //
};


initdb();
