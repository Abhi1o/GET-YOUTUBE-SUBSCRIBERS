const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index.js'); // Update the path accordingly
const expect = chai.expect;
const Subscriber= require('../src/models/subscribers.js');

chai.use(chaiHttp);

describe('Subscribers API', () => {
  // Test for the GET /subscribers endpoint
  describe('GET /subscribers', () => {
    it('should get a list of all subscribers', (done) => {
      chai.request(app)
        .get('/subscribers')
        .end((err, res) => {
          if (err) return done(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          done();
        });
    });
  });
  // Test for the GET /subscribers/names endpoint
  describe('GET /subscribers/names', () => {
    it('should get names and subscribed channels for each subscriber', (done) => {
      chai.request(app)
        .get('/subscribers/names')
        .end((err, res) => {
          if (err) return done(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          // Add more assertions as needed
          done();
        });
    });
  });

  // // Test for the GET /subscribers/id endpoint

  describe('GET /subscribers/:id', () => {
    it('should get subscriber information by ID', async () => {
      // Fetch a subscriber document from the collection
      const subscriber = await Subscriber.findOne();

      // Make sure a subscriber document was found
      if (!subscriber) {
        throw new Error('No subscriber documents found in the collection.');
      }

      // Get the _id from the fetched subscriber document
      const subscriberId = subscriber._id.toString();

      // Making the actual request using chai-http
      const response = await chai.request(app).get(`/subscribers/${subscriberId}`);
      
      // Assertions
      expect(response).to.have.status(200);
      expect(response.body).to.have.property('_id', subscriberId);
      // Add more assertions as needed
    });
  });

});



/* Note!  Before running "npm test" code, add 'module.exports=' in index.js file on line 36. 

          After adding, code should look like this : 

          module.exports = app.listen(port, () =>
                console.log(`App listening on port ${port}!`)
          ); 
*/