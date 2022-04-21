package com.example.restblog.web;


import com.example.restblog.data.Post;
import com.example.restblog.data.PostsRepository;
import com.example.restblog.data.UsersRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/posts", headers = "Accept=application/json")
public class PostsController {

    private final PostsRepository postsRepository;
    private final UsersRepository usersRepository;


    public PostsController(PostsRepository postsRepository, UsersRepository usersRepository) {
        this.postsRepository = postsRepository;
        this.usersRepository = usersRepository;
    }

    @GetMapping
    private List<Post> getAll() {
        return postsRepository.findAll();
    }
//    GET api/posts/5  5 being an id
    @GetMapping("{postId}")
    private Optional<Post> getById(@PathVariable Long postId){
        return postsRepository.findById(postId);
    }

    @PostMapping
    private void createPost(@RequestBody Post newPost){

        Post postToAdd = new Post(newPost.getTitle(), newPost.getContent());
        postToAdd.setAuthor(usersRepository.getById(1L));
        //SAVE THIS POST TO THE DATABASE
        postsRepository.save(postToAdd);
        System.out.println("Post created");
    }

    @PutMapping("{id}")
    private void updatePost(@PathVariable Long id, @RequestBody Post post){
        Post postToUpdate = postsRepository.getById(id);
        postToUpdate.setContent(post.getContent());
        postToUpdate.setTitle(post.getTitle());
        postsRepository.save(postToUpdate);
        System.out.println("Updating post with id of: " + id);
    }

    @DeleteMapping("{id}")
    private void deletePost(@PathVariable Long id) {
        postsRepository.deleteById(id);
        System.out.println("Deleted post with id of: " + id);
    }

}
