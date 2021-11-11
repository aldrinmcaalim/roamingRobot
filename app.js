function trackRobot(north, east, south, west){
    let first = 0;
    let second = 0;
    
    if (north) {
      second += north;
    }
    
    if (south) {
      second -= south;
    }

    if (east) {
      first += east;
    }
    
    if (west) {
      first -= west;
    }
    
    console.log(`[${first}, ${second}]`);
  }

trackRobot(20, 30, 10, 40);
trackRobot();
trackRobot(-10, 20, 10);