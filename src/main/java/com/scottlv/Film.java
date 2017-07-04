package com.scottlv;

public class Film {
    private long id;
    private String title;
    private String year;
    
    public Film(long id, String title) {
        this.id = id;
        this.title = title;
        year = "Unknown";
    }
    
    public Film(long id, String title, String year) {
        this.id = id;
        this.title = title;
        this.year = year;
    }
    
    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }
    
    public String getYear() {
        return year;
    }
}
