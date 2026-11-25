export const currentGoldRates = {
  lastUpdated: 'Today, 10:00 AM IST',
  date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
  gold24k: {
    perGram: 7980,
    per8Gram: 63840,
    change: +35,
    purity: '99.9% Pure Gold'
  },
  gold22k: {
    perGram: 7380,
    per8Gram: 59040,
    change: +30,
    purity: '91.6% BIS Hallmarked'
  },
  gold18k: {
    perGram: 6040,
    per8Gram: 48320,
    change: +25,
    purity: '75.0% Hallmarked'
  },
  silver999: {
    perGram: 102,
    perKg: 102000,
    change: +1.5,
    purity: '99.9% Pure Silver'
  }
};

export const cityGoldRates = [
  { city: 'Chennai', rate22k: 7380, rate24k: 7980, silver: 102 },
  { city: 'Bengaluru', rate22k: 7375, rate24k: 7975, silver: 101.5 },
  { city: 'Hyderabad', rate22k: 7385, rate24k: 7985, silver: 102.2 },
  { city: 'Coimbatore', rate22k: 7380, rate24k: 7980, silver: 102 },
  { city: 'Mumbai', rate22k: 7365, rate24k: 7965, silver: 100.8 },
  { city: 'Delhi', rate22k: 7390, rate24k: 7990, silver: 101.2 }
];

export const weeklyTrend = [
  { day: 'Mon', rate22k: 7310, rate24k: 7910 },
  { day: 'Tue', rate22k: 7325, rate24k: 7925 },
  { day: 'Wed', rate22k: 7350, rate24k: 7950 },
  { day: 'Thu', rate22k: 7340, rate24k: 7940 },
  { day: 'Fri', rate22k: 7360, rate24k: 7960 },
  { day: 'Sat', rate22k: 7370, rate24k: 7970 },
  { day: 'Today', rate22k: 7380, rate24k: 7980 },
];
