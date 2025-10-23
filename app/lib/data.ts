import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function fetchPosts() {
  try {
    const dataSourceId = "22cfcb08-f46a-8089-a486-000b840004ea";
    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      sorts: [
        {
          property: "last_updated",
          direction: "descending",
        },
      ],
    });

    return response.results;
  } catch (error) {
    console.error(error);
  }
}
