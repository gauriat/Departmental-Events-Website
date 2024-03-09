const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mongoUri = 'mongodb://localhost:27017'; 
const dbName = 'course_project'; 
const AdminLogincollectionName = 'AdminLogin'; 
const registerCollectionName = 'Register'; 
const register1CollectionName = 'Register1';
const eventsCollectionName = 'Events';
const register2CollectionName = 'Register2';
const register3CollectionName = 'Register3';
const register4CollectionName = 'Register4';
const events1CollectionName = 'Events1';

app.get('/fetch_all_admin', async (req, res) => {
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collection = database.collection(AdminLogincollectionName);

    console.log('Fetching all admin details...');

    try {
      const allAdmins = await collection.find().toArray();

      if (allAdmins.length > 0) {
        console.log('All admin Details:', allAdmins);
        res.json(allAdmins);
      } else {
        console.log('No admin found');
        res.status(404).json({ error: 'No admin found' });
      }
    } catch (error) {
      console.error('Error fetching all admin details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/Register', async (req, res) => {
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collection = database.collection(registerCollectionName);

    console.log('Inserting user details...');

    const newUser = req.body;

    try {
      const result = await collection.insertOne(newUser);

      if (result.insertedCount === 1) {
        console.log('User registration successful:', result.ops[0]);
        res.json({ success: true });
      } else {
        console.log('User registration failed');
        res.json({ success: false });
      }
    } catch (error) {
      console.error('Error inserting user details:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.post('/login', async (req, res) => {
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collection = database.collection(registerCollectionName);

    console.log('Checking user credentials...');

    const { email, password } = req.body;

    try {
      const user = await collection.findOne({ email, password });

      if (user) {
        console.log('User login successful:', user);
        res.json({ success: true });
      } else {
        console.log('Invalid credentials');
        res.json({ success: false });
      }
    } catch (error) {
      console.error('Error checking user credentials:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.post('/Register1', async (req, res) => {
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collectionRegister = database.collection(registerCollectionName); // Collection for initial registration
    const collectionRegister1 = database.collection(register1CollectionName); // Collection for second registration

    console.log('Checking user details for Register1...');

    const newUser = req.body;

    try {
      // Check if the user has already registered in Register1
      const existingRegister1User = await collectionRegister1.findOne({
        name: newUser.name,
        email: newUser.email,
        usn: newUser.usn,
        sem: newUser.sem,
      });

      if (existingRegister1User) {
        // If the user has already registered, display a message
        console.log('User has already registered for Register1');
        res.json({ success: false, error: 'You have already registered for this event' });
      } else {
        // Check if the user details match the details stored in the initial registration
        const initialRegistrationUser = await collectionRegister.findOne({
          name: newUser.name,
          email: newUser.email,
          usn: newUser.usn,
          sem: newUser.sem,
        });

        if (initialRegistrationUser) {
          // If there is a match, proceed with the second registration
          const result = await collectionRegister1.insertOne(newUser);

          if (result.insertedCount === 1) {
            console.log('User registration for Register1 successful:', result.ops[0]);
            res.json({ success: true });
          } else {
            console.log('User registration for Register1 failed');
            res.json({ success: false });
          }
        } else {
          // If there is no match, reject the second registration
          console.log('User details do not match initial registration');
          res.json({ success: false, error: 'User details do not match initial registration' });
        }
      }
    } catch (error) {
      console.error('Error checking user details for Register1:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.get('/display-1', async (req, res) => {
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collection = database.collection(register1CollectionName);

    console.log('Fetching Register1 student details...');

    try {
      const register1Students = await collection.find().toArray();

      if (register1Students.length > 0) {
        console.log('Register1 Student Details:', register1Students);
        res.json(register1Students);
      } else {
        console.log('No Register1 student found');
        res.status(404).json({ error: 'No Register1 student found' });
      }
    } catch (error) {
      console.error('Error fetching Register1 student details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/Register2', async (req, res) => {
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collectionRegister = database.collection(registerCollectionName); // Collection for initial registration
    const collectionRegister2 = database.collection(register2CollectionName); // Collection for second registration

    console.log('Checking user details for Register2...');

    const newUser = req.body;

    try {
      // Check if the user has already registered in Register2
      const existingRegister2User = await collectionRegister2.findOne({
        name: newUser.name,
        email: newUser.email,
        usn: newUser.usn,
        sem: newUser.sem,
      });

      if (existingRegister2User) {
        // If the user has already registered, display a message
        console.log('User has already registered for Register2');
        res.json({ success: false, error: 'You have already registered for this event' });
      } else {
        // Check if the user details match the details stored in the initial registration
        const initialRegistrationUser = await collectionRegister.findOne({
          name: newUser.name,
          email: newUser.email,
          usn: newUser.usn,
          sem: newUser.sem,
        });

        if (initialRegistrationUser) {
          // If there is a match, proceed with the second registration
          const result = await collectionRegister2.insertOne(newUser);

          if (result.insertedCount === 1) {
            console.log('User registration for Register2 successful:', result.ops[0]);
            res.json({ success: true });
          } else {
            console.log('User registration for Register2 failed');
            res.json({ success: false });
          }
        } else {
          // If there is no match, reject the second registration
          console.log('User details do not match initial registration');
          res.json({ success: false, error: 'User details do not match initial registration' });
        }
      }
    } catch (error) {
      console.error('Error checking user details for Register2:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.get('/display-2', async (req, res) => {
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collection = database.collection(register2CollectionName);

    console.log('Fetching Register2 student details...');

    try {
      const register2Students = await collection.find().toArray();

      if (register2Students.length > 0) {
        console.log('Register2 Student Details:', register2Students);
        res.json(register2Students);
      } else {
        console.log('No Register2 student found');
        res.status(404).json({ error: 'No Register2 student found' });
      }
    } catch (error) {
      console.error('Error fetching Register2 student details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/Register4', async (req, res) => {
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collectionRegister = database.collection(registerCollectionName); // Collection for initial registration
    const collectionRegister4 = database.collection(register4CollectionName); // Collection for second registration

    console.log('Checking user details for Register3...');

    const newUser = req.body;

    try {
      // Check if the user has already registered in Register3
      const existingRegister4User = await collectionRegister4.findOne({
        name: newUser.name,
        email: newUser.email,
        usn: newUser.usn,
        sem: newUser.sem,
      });

      if (existingRegister4User) {
        // If the user has already registered, display a message
        console.log('User has already registered for Register4');
        res.json({ success: false, error: 'You have already registered for this event' });
      } else {
        // Check if the user details match the details stored in the initial registration
        const initialRegistrationUser = await collectionRegister.findOne({
          name: newUser.name,
          email: newUser.email,
          usn: newUser.usn,
          sem: newUser.sem,
        });

        if (initialRegistrationUser) {
          // If there is a match, proceed with the second registration
          const result = await collectionRegister4.insertOne(newUser);

          if (result.insertedCount === 1) {
            console.log('User registration for Register4 successful:', result.ops[0]);
            res.json({ success: true });
          } else {
            console.log('User registration for Register4 failed');
            res.json({ success: false });
          }
        } else {
          // If there is no match, reject the second registration
          console.log('User details do not match initial registration');
          res.json({ success: false, error: 'User details do not match initial registration' });
        }
      }
    } catch (error) {
      console.error('Error checking user details for Register4:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.get('/display-4', async (req, res) => {
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collection = database.collection(register4CollectionName);

    console.log('Fetching Register3 student details...');

    try {
      const register4Students = await collection.find().toArray();

      if (register4Students.length > 0) {
        console.log('Register4 Student Details:', register4Students);
        res.json(register4Students);
      } else {
        console.log('No Register4 student found');
        res.status(404).json({ error: 'No Register4 student found' });
      }
    } catch (error) {
      console.error('Error fetching Register4 student details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/Register3', async (req, res) => {
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collectionRegister = database.collection(registerCollectionName); // Collection for initial registration
    const collectionRegister3 = database.collection(register3CollectionName); // Collection for second registration

    console.log('Checking user details for Register3...');

    const newUser = req.body;

    try {
      // Check if the user has already registered in Register3
      const existingRegister3User = await collectionRegister3.findOne({
        name: newUser.name,
        email: newUser.email,
        usn: newUser.usn,
        sem: newUser.sem,
      });

      if (existingRegister3User) {
        // If the user has already registered, display a message
        console.log('User has already registered for Register3');
        res.json({ success: false, error: 'You have already registered for this event' });
      } else {
        // Check if the user details match the details stored in the initial registration
        const initialRegistrationUser = await collectionRegister.findOne({
          name: newUser.name,
          email: newUser.email,
          usn: newUser.usn,
          sem: newUser.sem,
        });

        if (initialRegistrationUser) {
          // If there is a match, proceed with the second registration
          const result = await collectionRegister3.insertOne(newUser);

          if (result.insertedCount === 1) {
            console.log('User registration for Register3 successful:', result.ops[0]);
            res.json({ success: true });
          } else {
            console.log('User registration for Register3 failed');
            res.json({ success: false });
          }
        } else {
          // If there is no match, reject the second registration
          console.log('User details do not match initial registration');
          res.json({ success: false, error: 'User details do not match initial registration' });
        }
      }
    } catch (error) {
      console.error('Error checking user details for Register3:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.get('/display-3', async (req, res) => {
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collection = database.collection(register3CollectionName);

    console.log('Fetching Register3 student details...');

    try {
      const register3Students = await collection.find().toArray();

      if (register3Students.length > 0) {
        console.log('Register3 Student Details:', register3Students);
        res.json(register3Students);
      } else {
        console.log('No Register3 student found');
        res.status(404).json({ error: 'No Register3 student found' });
      }
    } catch (error) {
      console.error('Error fetching Register3 student details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
/*app.post('/addEvent', upload.single('image'), async (req, res) => {
  const image = req.file;
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
  
  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collectionEvents1 = database.collection(events1CollectionName);

    console.log('Adding event...');

    const newEvent = req.body;

    try {
      const result = await collectionEvents1.insertOne(newEvent);

      if (result.insertedCount === 1) {
        console.log('Event added successfully:', result.ops[0]);

        // Respond with success
        res.json({ success: true });
      } else {
        console.log('Failed to add event');
        res.json({ success: false });
      }
    } catch (error) {
      console.error('Error adding event:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});*/

app.post('/addEvent', upload.single('image'), async (req, res) => {
  try {
    const { description, date, time } = req.body;
    const image = req.file;

    if (!description || !date || !time || !image) {
      console.log('Missing event details or image');
      return res.status(400).json({ success: false, error: 'Missing event details or image' });
    }

    console.log('Connecting to MongoDB...');
    const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collectionEvents1 = database.collection(events1CollectionName);

    console.log('Adding event...');

    try {
      const result = await collectionEvents1.insertOne({
        description,
        date,
        time,
        image: {
          filename: image.filename,
          path: image.path,
          // Add other properties if needed
        },
      });

      if (result.insertedCount === 1) {
        console.log('Event added successfully:', result.ops[0]);
        res.json({ success: true });
      } else {
        console.log('Failed to add event');
        res.json({ success: false });
      }
    } catch (error) {
      console.error('Error adding event:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.get('/events1', async (req, res) => {
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collectionEvents1 = database.collection(events1CollectionName);

    console.log('Fetching all events...');

    try {
      const allEvents = await collectionEvents1.find().toArray();

      if (allEvents.length > 0) {
        console.log('All events:', allEvents);
        res.json(allEvents);
      } else {
        console.log('No events found');
        res.status(404).json({ error: 'No events found' });
      }
    } catch (error) {
      console.error('Error fetching all events:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/deleteEvent/:eventId', async (req, res) => {
  const { eventId } = req.params;

  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collectionEvents = database.collection(eventsCollectionName);

    console.log('Deleting event...');

    try {
      const result = await collectionEvents.deleteOne({ _id: ObjectId(eventId) });

      if (result.deletedCount === 1) {
        console.log('Event deleted successfully');
        res.json({ success: true });
      } else {
        console.log('Failed to delete event');
        res.json({ success: false });
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Add this route to your backend code
app.get('/downloadRegister1', async (req, res) => {
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collectionRegister1 = database.collection(register1CollectionName);

    console.log('Fetching Register1 student details for download...');

    try {
      const register1Students = await collectionRegister1.find().toArray();

      if (register1Students.length > 0) {
        console.log('Register1 Student Details:', register1Students);

        // Send the Register1 details as a downloadable file (e.g., JSON or CSV)
        res.setHeader('Content-Disposition', 'attachment; filename=register1_details.json');
        res.setHeader('Content-Type', 'application/json');
        res.json(register1Students);
      } else {
        console.log('No Register1 student found');
        res.status(404).json({ error: 'No Register1 student found' });
      }
    } catch (error) {
      console.error('Error fetching Register1 student details for download:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/downloadRegister2', async (req, res) => {
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collectionRegister2 = database.collection(register2CollectionName);

    console.log('Fetching Register2 student details for download...');

    try {
      const register2Students = await collectionRegister2.find().toArray();

      if (register2Students.length > 0) {
        console.log('Register2 Student Details:', register2Students);

        // Send the Register1 details as a downloadable file (e.g., JSON or CSV)
        res.setHeader('Content-Disposition', 'attachment; filename=register2_details.json');
        res.setHeader('Content-Type', 'application/json');
        res.json(register2Students);
      } else {
        console.log('No Register2 student found');
        res.status(404).json({ error: 'No Register2 student found' });
      }
    } catch (error) {
      console.error('Error fetching Register2 student details for download:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/downloadRegister3', async (req, res) => {
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collectionRegister3 = database.collection(register3CollectionName);

    console.log('Fetching Register3 student details for download...');

    try {
      const register3Students = await collectionRegister3.find().toArray();

      if (register3Students.length > 0) {
        console.log('Register3 Student Details:', register3Students);

        // Send the Register1 details as a downloadable file (e.g., JSON or CSV)
        res.setHeader('Content-Disposition', 'attachment; filename=register3_details.json');
        res.setHeader('Content-Type', 'application/json');
        res.json(register3Students);
      } else {
        console.log('No Register3 student found');
        res.status(404).json({ error: 'No Register3 student found' });
      }
    } catch (error) {
      console.error('Error fetching Register3 student details for download:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/downloadRegister4', async (req, res) => {
  const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    console.log('Connecting to MongoDB...');
    await client.connect();
    console.log('Connected to MongoDB:', client.topology.isConnected());

    const database = client.db(dbName);
    const collectionRegister4 = database.collection(register4CollectionName);

    console.log('Fetching Register4 student details for download...');

    try {
      const register4Students = await collectionRegister4.find().toArray();

      if (register4Students.length > 0) {
        console.log('Register4 Student Details:', register4Students);

        // Send the Register4 details as a downloadable file (e.g., JSON or CSV)
        res.setHeader('Content-Disposition', 'attachment; filename=register4_details.json');
        res.setHeader('Content-Type', 'application/json');
        res.json(register4Students);
      } else {
        console.log('No Register4 student found');
        res.status(404).json({ error: 'No Register3 student found' });
      }
    } catch (error) {
      console.error('Error fetching Register4 student details for download:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      console.log('Closing MongoDB connection...');
      await client.close();
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
