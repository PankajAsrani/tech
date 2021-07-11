package com.tech.tech;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ImageController {

    @Autowired
    ImageRepository event;


    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/images")
    public Image event(@RequestBody Image ev){
    return this.event.save(ev);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/images")
    public List<Image> getEvents(){
        return this.event.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/images/{id}")
    public Optional<Image> getEvent(@PathVariable("id") Long id){
        return this.event.findById(id);
    }


    
}
