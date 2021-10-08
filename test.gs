function runQuery() {
  // Replace this value with the project ID listed in the Google
  // Cloud Platform project.
  var projectId = 'nyt-bigquery-beta-workspace';

  var request = {
    query: 'SELECT COUNT(*) ' +
      'FROM `nyt-bigquery-beta-workspace.caa_tables.content_prod`;'
  };
  var queryResults = BigQuery.Jobs.query(request, projectId);
  var jobId = queryResults.jobReference.jobId;

  // Check on status of the Query Job.
  var sleepTimeMs = 500;
  while (!queryResults.jobComplete) {
    Utilities.sleep(sleepTimeMs);
    sleepTimeMs *= 2;
    queryResults = BigQuery.Jobs.getQueryResults(projectId, jobId);
  }
console.Log(queryResults)
