import { StatsTracker } from './stats-tracker'
import { test } from './test'

const tracker = StatsTracker.instance

tracker.widgetViews = 90
tracker.buttonClicks = 3
tracker.facebookShares = 98
tracker.twitterShares = 88

console.log(`Widgets Views: ${tracker.widgetViews}`)
console.log(`Button Clicks: ${tracker.buttonClicks}`)
console.log(`Facebook Shares: ${tracker.facebookShares}`)
console.log(`Twitter Shares: ${tracker.twitterShares}`)

tracker.widgetViews++
tracker.twitterShares += 3

test()

// import { a } from './test2'
// import { test } from './test'

// test()

// a.t = 9

// console.log(a)

// test()
