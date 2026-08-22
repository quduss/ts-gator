import { fetchFeed } from "../lib/rss";
import { markFeedFetched } from "src/lib/db/queries/feeds";
import { Feed } from "src/lib/db/schema";

export async function handlerAgg(_: string) {
  const feedURL = "https://www.wagslane.dev/index.xml";

  const feedData = await fetchFeed(feedURL);
  const feedDataStr = JSON.stringify(feedData, null, 2);
  console.log(feedDataStr);
}

async function scrapeFeed(feed: Feed) {
  const feedData = await fetchFeed(feed.url);
  await markFeedFetched(feed.id);

  for (const item of feedData.channel.item) {
    console.log(item.title);
  }

  console.log(
    `Feed ${feed.name} collected, ${feedData.channel.item.length} posts found`,
  );
}