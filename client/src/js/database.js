import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error("PUT request was sent successfully!");
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log("Data was successfully saved to jateDb!", result);
};

// Method that gets all the content from the database
export const getDb = async () => {
  console.error("GET request was sent successfully!");
  const jateDb = await openDB('jateDB', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  console.log('Data was successfully pulled from jateDb!', result);
  return result?.value;
};

initdb();
