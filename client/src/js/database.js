import { openDB } from 'idb'; 


const initdb = async () => // 
  openDB('jate', 1, { // openDB is a function that takes 3 arguments
    upgrade(db) { // upgrade is a function that takes 1 argument
      if (db.objectStoreNames.contains('jate')) {   // if the database already exists
        console.log('jate database already exists'); // log that it already exists
        return; // and return
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true }); // otherwise create a new database
      console.log('jate database created'); // and log that it was created
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => { // the const putDb is a function that is async and takes 1 argument
  const db = await initdb(); // the const db is a function that is async and takes 1 argument
  const tx = db.transaction('jate', 'readwrite'); // the const tx is a function that takes 2 arguments
  const store = tx.objectStore('jate'); // the const store is a function that takes 1 argument
  await store.put(content); // the const store is a function that is async and takes 1 argument
  console.error('putDb not implemented'); // the const putDb is a function that is async and takes 1 argument
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await initdb();
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const content = await store.getAll();
  console.error('getDb not implemented');
  return content;
};

initdb();
