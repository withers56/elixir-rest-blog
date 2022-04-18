package com.example.restblog.web;


import com.example.restblog.data.Post;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/posts", headers = "Accept=application/json")
public class PostsController {

    @GetMapping
    private List<Post> getAll() {
        ArrayList<Post> posts = new ArrayList<>();
        Post post1 = new Post(1L, "The greta studies of lorem", "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda ducimus earum eligendi, laboriosam libero molestias nobis possimus sed velit. Architecto atque deserunt dolorem iusto obcaecati qui quisquam similique voluptates voluptatum! Ex inventore nemo odio omnis placeat repellat vel. Ad corporis dignissimos eius laborum tempora. Ea magnam nesciunt numquam sapiente.\n");
        Post post2 = new Post(2L, "Testtitle1", "Testcontent");
        Post post3 = new Post(3L, "Testtitle1", "Testcontent");
        posts.add(post1);
        posts.add(post2);
        posts.add(post3);

        return posts;
    }
    //GET api/posts/5  5 being an id
    @GetMapping("{postId}")
    public Post getById(@PathVariable Long postId){
        return new Post(postId, "Example", "example");
    }

    @PostMapping
    private void createPost(@RequestBody Post newPost){
        System.out.println("ready to add post: " + newPost);
    }

    @PutMapping("{id}")
    private void updatePost(@PathVariable long id, @RequestBody Post post){
        System.out.println("Updating post with id of: " + id + "\nwith: " + post);
    }

    @DeleteMapping("{id}")
    private void deletePost(@PathVariable long id) {
        System.out.println("Deleting post with id of: " + id);
    }

}
