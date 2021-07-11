package com.tech.tech;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name="images")
@EntityListeners(AuditingEntityListener.class)
public class Image implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String url;

    @Column(nullable = false)
    private String details;

    @Column(nullable = false)
    private String name;

    public Long getId(){
        return this.id;
    }
    public Image setId(Long id){
        this.id=id;
        return this;
    }
    public String getName(){
        return this.name;
    }
    public Image setName(String name){
        this.name=name;
        return this;
    }

    public String getUrl(){
        return this.url;
    }
    public Image setUrl(String url){
        this.url=url;
        return this;
    }
    public String getDetails(){
        return this.details;
    }
    public Image setDetails(String details){
        this.details=details;
        return this;
    }
}
