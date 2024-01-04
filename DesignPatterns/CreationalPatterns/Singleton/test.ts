import { StatsTracker } from './stats-tracker'

export function test() {
  let tracker = StatsTracker.instance
  console.log(`Widgets Views: ${tracker.widgetViews}`)
  console.log(`Button Clicks: ${tracker.buttonClicks}`)
  console.log(`Facebook Shares: ${tracker.facebookShares}`)
  console.log(`Twitter Shares: ${tracker.twitterShares}`)
}

// import { a } from './test2'

// export function test() {
//   console.log('a', a)
// }
