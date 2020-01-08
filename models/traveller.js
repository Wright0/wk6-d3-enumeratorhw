const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((totalDistance, journey) => {
    return totalDistance + journey.distance
  }, 0)
};

//This is sort of cheating but I found a simple way to do it using set with spread syntax.
//The idea behind set is that the items in it can only exist once. It's a set of things. It does the filtering for you.
//The ... spreads the items in the set out. Sort of allows you to see them? Access them? It puts them side by side anway.
//The [] around it puts that into an array.
Traveller.prototype.getUniqueModesOfTransport = function () {
  const allTransports = this.journeys.map(journey => journey.transport)
  return [...new Set(allTransports)];
};

module.exports = Traveller;
