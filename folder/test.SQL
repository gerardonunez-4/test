CREATE OR REPLACE FUNCTION `nyt-bigquery-beta-workspace.gerard_data.CLEAN_URL`(url STRING)
OPTIONS (description="This function cleans the URL from 'https://' to 'http://'. This is useful when using URLs instead of uris to match specific pieces.") AS (
REGEXP_REPLACE(url, "https://", "http://")
);
