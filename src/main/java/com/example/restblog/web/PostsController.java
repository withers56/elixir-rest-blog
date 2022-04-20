package com.example.restblog.web;


import com.example.restblog.data.Post;
import com.example.restblog.data.PostsRepository;
import com.example.restblog.data.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/posts", headers = "Accept=application/json")
public class PostsController {

    private PostsRepository postsRepository;

    public PostsController(PostsRepository postsRepository) {
        this.postsRepository = postsRepository;
    }

    private static final User user1 = new User(1, "testman1", "test1@gmail.com", "mypass", null, User.Role.USER, null);
    private static final User user2 = new User(2, "testman2", "test2@gmail.com", "mypass", null, User.Role.USER, null);
    private static final User user3 = new User(3, "testman3", "test3@gmail.com", "mypass", null, User.Role.USER, null);

    @GetMapping
    private List<Post> getAll() {
        return postsRepository.findAll();
    }
//    GET api/posts/5  5 being an id
    @GetMapping("{postId}")
    public Post getById(@PathVariable Long postId){
        return postsRepository.getById(postId);
    }

    @PostMapping
    private void createPost(@RequestBody Post newPost){
        Post postToAdd = new Post(newPost.getTitle(), newPost.getContent());
        //SAVE THIS POST TO THE DATABASE
        postsRepository.save(postToAdd);
        System.out.println("Post created");
    }

    @PutMapping("{id}")
    private void updatePost(@PathVariable long id, @RequestBody Post post){
        Post postToUpdate = postsRepository.getById(id);
        postToUpdate.setContent(post.getContent());
        postToUpdate.setTitle(post.getTitle());
        postsRepository.save(postToUpdate);
        System.out.println("Updating post with id of: " + id);
    }

    @DeleteMapping("{id}")
    private void deletePost(@PathVariable long id) {
        postsRepository.deleteById(id);
        System.out.println("Deleted post with id of: " + id);
    }

}
