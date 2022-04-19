import createView from "../createView.js";

const USER_URI = "http://localhost:8080/api/users/";


export default function Profile(props) {
    console.log(props)
    // language=HTML
    return `
        <header>
            <h1>PROFILE</h1>
        </header>
        <main>
            <div class="container-fluid row m-0">
                <div class="profile-info col-4">
                    <div class="profile-image m-1">
                        <img src="https://picsum.photos/275" alt="profile-pic">
                    </div>
                    <div class="profile-username" data-username="${props.users.username}">
                        <h3 class="m-1">${props.users.username}</h3>
                    </div>
                    <div class="profile-email m-1">
                        ${props.users.email}
                    </div>
                    <div class="profile-password m-1">
                        ${props.users.password}
                    </div>

                    <hr>
                    
                    <div class="profile-password-change-form m-1">
                        <form>
                            <div class="mb-3">
                                <label for="password-current" class="form-label">Current Password</label>
                                <input type="password" class="form-control" id="password-current">
                            </div>
                            <label for="password-new" class="form-label">New Password</label>
                            <input type="password" id="password-new" class="form-control" aria-describedby="passwordHelpBlock">
                            <button type="button" class="btn btn-primary mt-3" id="password-update-btn">Update password</button>
                        </form>
                    </div>
                </div>
                
                <div id="profile-posts" class="col-8">
                    <div class="card my-3">
                          <h5 class="card-header background-dark">$Example post</h5>
                          <div class="card-body">
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A assumenda dolore dolorum incidunt nesciunt qui quibusdam. Cupiditate quos repellendus velit.</p>
                            <div id="btn-container" class="d-flex justify-content-start">
                                <div class="mx-2"><button class="post-delete-btn btn btn-danger" value=${props.users.id}>delete</button></div>
                                <div class="dropdown mx-2 w-100">
                                    <button class="btn btn-primary dropdown-toggle" type="button" id="post-edit-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                    edit
                                    </button>
                                    <form class="dropdown-menu p-1 w-50 border-dark">
                                         <div class="mb-3">
                                           <label for="post-updated-title" class="form-label">Title</label>
                                           <input type="email" class="form-control" id="post-updated-title" value="example post">
                                         </div>
                                         <div class="mb-3">
                                           <label for="post-updated-content" class="form-label">Content</label>
                                           <textarea class="form-control" id="post-updated-content" rows="4">COntent</textarea>
                                         </div>
                                         <div class="d-flex justify-content-end">
                                           <button type="button" class="btn btn-success post-edit-dropdown-btn" value="${props.users.id}">Update</button>
                                         </div>
                                  </form>
                                </div>
                            </div>
                          </div>
                        </div>
                </div>
                
                
                
                
                
                
                
                  
            </div>
        </main>
    `;
}

export function UserEvents() {
    addListenerToUpdatePassword();
}

function addListenerToUpdatePassword() {
    $('#password-update-btn').click(function (){
        const username = $('.profile-username').data('username')
        const currentPassword = $('#password-current').val();
        const newPassword = $('#password-new').val();

        console.log(username)
        console.log(currentPassword)
        console.log(newPassword)

        const requestObject = {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPassword)
        }

        fetch(`${USER_URI}${username}/updatePassword`, requestObject).then(function (){
            console.log("Updating user: " + username + "'s password to: " + newPassword)
        }).catch(function (){
            console.log("error")
        }).finally(function (){
            createView("/profile")
        })
    });
}