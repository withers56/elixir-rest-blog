import createView from "../createView.js";

const POST_URI = "http://localhost:8080/api/posts";
export default function PostIndex(props) {
    console.log(props);
    //language=HTML

    return `


        <header>
            <h1>Posts Page</h1>
        </header>
        <main>
            <div id="create-post-form" class="mx-5">
                <form>
                    <div class="form-group">
                        <label for="post-title">Title</label>
<!--                        <input type="email" class="form-control background-card-dark" id="post-title">-->
                        <input type="email" name="test" id="post-title" class="background-card-dark create-input">

                    </div>

                    <div class="form-group">
                        <label for="post-content">Content</label>
<!--                        <textarea class="form-control background-card-dark" id="post-content" rows="3"></textarea>-->
                        <textarea name="test" id="post-content" class="background-card-dark create-input"></textarea>

                    </div>
                    <div class="form-group mt-2 d-flex justify-content-end">
                        <button class="btn btn-success" type="button" id="postCreateBtn">Create post</button>
                    </div>
                </form>
            </div>
            
            <hr class="mt-3" style="width: 91%; margin: auto">

            <div id="posts-container" class="mx-5 ">
                ${props.posts.map(post =>
                        `
        
                        <div class="card my-3">
                        <div class="card-header background-card-dark d-flex justify-content-between">
                            <h3>${post.title}</h3>
                            <div class="author-categories w-40">
                                <div class="author">Author: ${post.author.username}</div>
                                <div class="categories">Categories: ${post.categories.map(category => category.name)}</div>
                            </div>

                        </div>
                          <div class="card-body background-card-dark">
                            <p class="card-text">${post.content}</p>
                            <div id="btn-container" class="d-flex justify-content-start">
                                <div class="mx-2"><button class="post-delete-btn btn btn-danger btn-sm" value=${post.id}><i class="bi bi-trash-fill"></i></button></div>
                                <div class="dropdown mx-2 w-100">
                                    <button class="btn btn-primary dropdown-toggle btn-sm" type="button" id="post-edit-btn" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-pencil-fill"></i>
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
        </main>
    `;
}

export function PostsEvent() {
    addListenerToCreatePost();
    addListenerToUpdatePost();
    addListenerToDeletePost();
}

function addListenerToCreatePost(){
    $('#postCreateBtn').click(function (){

        const title = $('#post-title').val();
        const content = $('#post-content').val();
        const newPost = {
            title,
            content
        }

        const requestObject = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPost)
        }
        console.log(newPost);

        fetch(POST_URI, requestObject).then(function (result){
            console.log("added post");
        }).catch(function (error){
            console.log(error);
        }).finally(() => {
            createView("/posts")
        });
    });
}
function addListenerToUpdatePost() {
    $(".post-edit-dropdown-btn").click(function (){
        const postId = $(this).val();
        console.log(postId)

        const updatedTitle = $(`#post-updated-title-${postId}`).val();
        const updatedContent = $(`#post-updated-content-${postId}`).val();

        const updatedPost = {
            title: updatedTitle,
            content: updatedContent
        }

        const requestObject = {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedPost)
        }



        fetch(`${POST_URI}/${postId}`, requestObject).then(function (resp){
            console.log("Updating post with id of: " + postId + " to: " + updatedPost.title + " and " + updatedPost.content);
        }).catch(function (){
            console.log("error")
        }).finally(function (){
            createView("/posts")
        });

    });
}
function addListenerToDeletePost(){
    $(".post-delete-btn").click(function (){
        const postId = $(this).val();

        fetch(`${POST_URI}/${postId}`, {method: "DELETE"}).then(function (resp){
            console.log("deleted post woht id of " + postId);
        }).catch(function (){
            console.log("error")
        }).finally(function (){
            createView("/posts")
        });
    });
}