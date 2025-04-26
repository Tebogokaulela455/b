const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const coursesRoutes = require('./routes/courses');
const applicationsRoutes = require('./routes/applications');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/applications', applicationsRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
