class truth {
    constructor(_evennums) {
      this._evennums = _evennums;
    }
    getEven() {
      const evenSum = this._evennums.reduce((acc, value) => acc + value, 0);
      return evenSum / this._evennums.length;
    }
    // median
    getMedian() {
      const median = this._evennums.slice().sort((a, b) => a - b); // Make a copy before sorting
      const midnorm = Math.floor(median.length / 2);
  
      if (median.length % 2 === 0) {
        return (median[midnorm - 1] + median[midnorm]) / 2;
      } else {
        return median[midnorm];
      }
    }
  }
  
  let dare = new truth([1, 4, 8, 10]);
  console.log(dare.getEven());
  console.log(dare.getMedian());
  
  // calculate mode
  class DescriptiveStatisticsCalculator {
    constructor(data) {
      this.data = data || [];
    }
  
    calculateDataRange() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    }
  
    calculateDataVariance() {
      const mean = this.calculateDataMean();
      const squaredDifferences = this.data.map(value => Math.pow(value - mean, 2));
      return squaredDifferences.reduce((accumulator, value) => accumulator + value, 0) / this.data.length;
    }
  
    calculateDataStandardDeviation() {
      return Math.sqrt(this.calculateDataVariance());
    }
  
    calculateInterquartileDataRange() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const q1 = this.calculateDataPercentile(sortedData, 25);
      const q3 = this.calculateDataPercentile(sortedData, 75);
      return q3 - q1;
    }
  
    calculateCoefficientOfDataVariation() {
      const mean = this.calculateDataMean();
      const standardDeviation = this.calculateDataStandardDeviation();
      return (standardDeviation / mean) * 100;
    }
  
    calculateDataPercentile(sortedData, percentile) {
      const index = Math.ceil((percentile / 100) * (sortedData.length - 1));
      return sortedData[index];
    }
  
    calculateDataMean() {
      return this.data.reduce((accumulator, value) => accumulator + value, 0) / this.data.length;
    }
  
    // You may want to add the calculateMode function here or remove it if not needed.
  }
  
  const dataCalculator = new DescriptiveStatisticsCalculator([10, 5, 8, 15, 7]);
  console.log(dataCalculator.calculateDataRange());
  console.log(dataCalculator.calculateDataVariance());
  console.log(dataCalculator.calculateDataStandardDeviation());
  console.log(dataCalculator.calculateInterquartileDataRange());
  console.log(dataCalculator.calculateCoefficientOfDataVariation());