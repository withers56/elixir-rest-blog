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
            <div class="container-fluid m-0">
                <div class="row ">
                    
               
                <div class="profile-info col-12 col-md-4">
                    <div class="profile-image mx-auto m-md-1">
                        <img src="https://picsum.photos/275" alt="profile-pic">
                    </div>
                    <div class="profile-id" data-id="${props.users.id}"></div>
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
                
                <div class="profile-posts col-12 offset-md-1 offset-lg-0 col-md-7 col-lg-8">
                    ${props.users.posts.map(post => 
                            `
                            
                            <div class="card my-3">
                        <div class="card-header background-card-dark d-flex justify-content-between">
                            <h3>${post.title}</h3>
                            <div class="author-categories">
                                <div class="author">Author: ${props.users.username}</div>
                                <div class="categories">Categories: ${post.categories.map(category => category.name)}</div>
                            </div>

                        </div>
                          <div class="card-body background-card-dark">
                            <p class="card-text">${post.content}</p>
                            <div id="btn-container" class="d-flex justify-content-start">
                                <div class="mx-2"><button class="post-delete-btn btn btn-danger btn-sm" value=${post.id}>delete</button></div>
                                <div class="dropdown mx-2 w-100">
                                    <button class="btn btn-primary dropdown-toggle btn-sm" type="button" id="post-edit-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                    edit
                                    </button>
                                    <form class="dropdown-menu p-1 w-50 border-dark">
                                         <div class="mb-3">
                                           <label for="post-updated-title" class="form-label">Title</label>
                                           <input type="email" class="form-control" id="post-updated-title-${post.id}" value="${post.title}">
                                         </div>
                                         <div class="mb-3">
                                           <label for="post-updated-content" class="form-label">Content</label>
                                           <textarea class="form-control" id="post-updated-content-${post.id}" rows="4">${post.content}</textarea>
                                         </div>
                                         <div class="d-flex justify-content-end">
                                           <button type="button" class="btn btn-success post-edit-dropdown-btn" value="${post.id}">Update</button>
                                         </div>
                                  </form>
                                </div>
                            </div>
                          </div>
                        </div>
                            
                            `)
                            .join('')}
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
        const userId = $('.profile-id').data('id');
        const username = $('.profile-username').data('username');
        const currentPassword = $('#password-current').val();
        const newPassword = $('#password-new').val();

        console.log(username)
        console.log(currentPassword)
        console.log(newPassword)

        const requestObject = {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: newPassword
        }

        fetch(`${USER_URI}${userId}/updatePassword`, requestObject).then(function (){
            console.log("Updating user: " + username + "'s password to: " + newPassword)
        }).catch(function (){
            console.log("error")
        }).finally(function (){
            createView("/profile")
        })
    });
}