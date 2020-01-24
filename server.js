const express = require('express'),
         port = 8000,
      db_name = 'petshelterdb',
         cors = require('cors'),
          app = express();

app.use(cors());
app.use(express.json());

require('./server/mongoose')(db_name);
require('./server/routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}.`));