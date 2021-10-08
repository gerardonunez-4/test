/**
* Getting a file less than 1MB. 
* See https://developer.github.com/v3/repos/contents/#get-contents
*/


function getSmallFileFromGithub(){
// set token service
Github.setTokenService(function(){ return getGithubService_().getAccessToken();});
// set the repository wrapper
// Github.setRepo('YOUR_USERNAME', 'YOUR_REPO');
Github.setRepo('gerardonunez-nyt', 'audience-coverage'); // e.g. Github.setRepo('mhawksey', 'mhawksey.github.io');
var branch = 'main'; // you can switch to differnt branch
// getting a single file object
var git_file_obj = Github.Repository.getContents({ref: branch}, '/caa_tables/prod_views.SQL');
var git_file = Utilities.newBlob(Utilities.base64Decode(git_file_obj.content)).getDataAsString();
var git_dir = Github.Repository.getContents({ref: branch}, '/caa_tables/');
// In my project I included a getContentsByUrl which uses a git url which is useful if working within the tree
var git_file_by_url = Github.Repository.getContentsByUrl(git_dir[0].git_url);
Logger.log(git_dir);
}