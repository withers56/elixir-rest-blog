import {getHeaders} from "../auth.js";
import createView from "../createView.js";

const USER_URI = 'http://localhost:8080/api/users'

export default function Admin(props) {
    console.log(props)
    return `
        <header class="row justify-content-evenly">
        <h4>update section</h4>
            <div id="update-user-form" class="m-1 col-5">
                <form>
                

                    <div class="row">
                        <div class="col">
                            <label for="user-username">Username</label>
                            <input type="text" name="username" id="user-username" class="background-card-dark create-input">
                        </div>
                        <div class="col">
                        <label for="user-email">Email</label>
                            <input type="text" name="email" id="user-email" class="background-card-dark create-input">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="user-role">Role</label>
                            <input type="text" name="role" id="user-role" class="background-card-dark create-input">
                        </div>
                        <div class="col">
                        <label for="user-id">Id</label>
                            <input type="text" name="id" id="user-id" class="background-card-dark create-input">
                        </div>
                    </div>
                    <div class="m-1 d-flex justify-content-end">
                        <button class="btn update-user-btn btn-success" type="button">Update</button>
                    </div>
                            
                </form>
            </div>
            <div id="update-post-form" class="m-1 col-5">
                <form>
                    <div class="form-group">
                        <label for="post-title">Title</label>
                        <!--                        <input type="email" class="form-control background-card-dark" id="post-title">-->
                        <input type="email" name="test" id="post-title" class="background-card-dark create-input no-focus">
                    </div>

                    <div class="form-group">
                        <label for="post-content">Content</label>
                        <!--                        <textarea class="form-control background-card-dark" id="post-content" rows="3"></textarea>-->
                        <textarea name="test" id="post-content" class="background-card-dark create-input no-focus"></textarea>
                    </div>
                    <label for="categories-select">Categories</label>
                    <div class="form-group d-flex justify-content-between" id="categories-select">
                        <select id="categories-list-1" class="form-select" multiple size="4" aria-label="size 3 select example">
                            <option value="music">Music</option>
                            <option value="sports">Sports</option>
                            <option value="food">Food</option>
                            <option value="drink">Drink</option>
                        </select>
                        <select id="categories-list-2" class="form-select" multiple size="4" aria-label="size 3 select example">
                            <option value="art">Art</option>
                            <option value="outdoors">Outdoors</option>
                            <option value="business">Business</option>
                            <option value="culture">Culture</option>
                        </select>
                        <select id="categories-list-3" class="form-select" multiple size="4" aria-label="size 3 select example">
                            <option value="entertainment">Entertainment</option>
                            <option value="politics">Politics</option>
                            <option value="science">Science</option>
                            <option value="nature">Nature</option>
                        </select>
                    </div>
                    <div class="form-group mt-2 d-flex justify-content-end">
                        <button class="btn btn-success" type="button" id="postCreateBtn">Create post</button>
                    </div>
                </form>
            </div>


            <hr class="mt-3" style="width: 91%; margin: auto">
        </header>
        <main class="row">
            <div id="all-users" class="d-flex flex-wrap justify-content-center col-12 col-md-6">
            ${props.users.map(user =>
                `
                
                <div class="card text-white background-card-dark m-1" style="width: 100%; font-size: .75em">
                    <div class="card-body d-flex justify-content-between">
                      <div class="card-text" style="width: 45%">
                        <div>Email: ${user.email}</div>
                        <div>Username: ${user.username}</div>
                      </div>
                      <div class="card-text" style="width: 20%">
                        <div>Role: ${user.role}</div>
                        <div>Id: ${user.id}</div>
                      </div>
                      <div class="card-text" style="width: 35%">
                        <div>Create Date: ${user.createdAt}</div>
                        <div>Posts: ${user.posts.length}</div>
                      </div>  
                    </div>
                </div>
                `
                ).join('')}
                  
            </div>
        </main>
    `;
}

export function AdminEvents() {
    addEventToUpdateUser()
}

function addEventToUpdateUser() {
    $('.update-user-btn').click(function (){
        console.log('clicked update')
        const id = $('#user-id').val();
        const username = $('#user-username').val();
        const email = $('#user-email').val();
        const role = $('#user-role').val();

        const updatedUser = {
            username,
            email,
            role
        }
        console.log(updatedUser);
        const requestObject = {
            method: "PUT",
            headers: getHeaders(),
            body: JSON.stringify(updatedUser)
        }

        fetch(`${USER_URI}/${id}`, requestObject).then(function (){
            console.log('user updated');
        }).catch(function (){
            console.log("error")
        }).finally(function (){
            createView("/admin");
        })
    });
}