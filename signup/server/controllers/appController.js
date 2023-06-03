
























/** POST: http://localhost:8080/api/login 
 * @param: {
  "email" : "example@gmail.com",
  "password" : "admin123"
}
*/
export async function login(req,res){
    res.json('login route');
}



/** GET: http://localhost:8080/api/user/example123 */
export async function getUser(req,res){
    res.json('getUser route');
}
/** PUT: http://localhost:8080/api/updateuser 
 * @param: {
  "header" : "<token>"
}
body: {
    username: '',
    age : '',
    mobile : '',
      dob : ''
}
*/
export async function updateUser(req,res){
    res.json('updateUser route')
}