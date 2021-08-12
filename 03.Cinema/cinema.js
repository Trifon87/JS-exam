const cinema = {
    showMovies: function (movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function (projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function (firstPlace, secondPlace) {
        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 ||
            firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};

let {assert, expect} = require('chai');


describe.only("Tests …", function() {
    describe("showMovies …", function() {
        it("zero movie …", function() {
            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.')
            
        });
        it("with movie …", function() {
            assert.equal(cinema.showMovies(['Batman']), 'Batman')
            
        });
        it("with 2 movies …", function() {
            assert.equal(cinema.showMovies(['Batman', 'Matrix']), 'Batman, Matrix')
            
        });

        
     });

     describe("ticketPrice …", function() {
        it("normal …", function() {
            assert.equal(cinema.ticketPrice('Normal'), '7.50')
            
        });
        it("Premiere …", function() {
            assert.equal(cinema.ticketPrice('Premiere'), '12.00')
            
        });
      
        it("Discount …", function() {
            assert.equal(cinema.ticketPrice('Discount'), '5.50')
            
        });  
          it("invalid type …", function() {
            assert.throw(() => cinema.ticketPrice('A'), Error, 'Invalid projection type.')
            assert.throw(() => cinema.ticketPrice(1), Error, 'Invalid projection type.')
            assert.throw(() => cinema.ticketPrice([]), Error, 'Invalid projection type.')

            
        });
      
        
      

        
     });

     describe("swapSeatsInHall …", function() {
        it("swapSeatsInHall first 0 …", function() {
            assert.equal(cinema.swapSeatsInHall(0, 3), "Unsuccessful change of seats in the hall.")
            
        });
        it("swapSeatsInHall …", function() {
            assert.equal(cinema.swapSeatsInHall(1, 0), "Unsuccessful change of seats in the hall.")
            
        });
        it("swapSeatsInHall …", function() {
            assert.equal(cinema.swapSeatsInHall(21, 3), "Unsuccessful change of seats in the hall.")
            
        });
        it("swapSeatsInHall …", function() {
            assert.equal(cinema.swapSeatsInHall(20, 3), "Successful change of seats in the hall.")
            
        });
        it("swapSeatsInHall …", function() {
            assert.equal(cinema.swapSeatsInHall(10, 20), "Successful change of seats in the hall.")
            
        });
        it("swapSeatsInHall …", function() {
            assert.equal(cinema.swapSeatsInHall(5, 22), "Unsuccessful change of seats in the hall.")
            
        });
        it("swapSeatsInHall …", function() {
            assert.equal(cinema.swapSeatsInHall('a', 5), "Unsuccessful change of seats in the hall.")
            
        });
        it("swapSeatsInHall …", function() {
            assert.equal(cinema.swapSeatsInHall(5, 'b'), "Unsuccessful change of seats in the hall.")
            
        });
        it("swapSeatsInHall …", function() {
            assert.equal(cinema.swapSeatsInHall([], 5), "Unsuccessful change of seats in the hall.")
            
        });
        it("swapSeatsInHall …", function() {
            assert.equal(cinema.swapSeatsInHall(5, 5), "Unsuccessful change of seats in the hall.")
            
        });
        it("swapSeatsInHall …", function() {
            assert.equal(cinema.swapSeatsInHall(3, 5), "Successful change of seats in the hall.")
            
        });
        it("swapSeatsInHall strings…", function() {
            assert.equal(cinema.swapSeatsInHall('a', 'a'), "Unsuccessful change of seats in the hall.")
            
        });
        it("swapSeatsInHall strings…", function() {
            assert.equal(cinema.swapSeatsInHall(5.5, 10), "Unsuccessful change of seats in the hall.")
            
        });
        it("swapSeatsInHall strings…", function() {
            assert.equal(cinema.swapSeatsInHall(5, 10.5), "Unsuccessful change of seats in the hall.")
            
        });


      
    
     });
    
});

