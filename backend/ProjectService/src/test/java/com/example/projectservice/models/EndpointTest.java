package com.example.projectservice.models;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class EndpointTest {

    private Endpoint endpoint;

    @BeforeEach
    void setUp() {
        endpoint = new Endpoint();
    }

    @Test
    void getEndpointId() {
        endpoint.setEndpointId("Id");
        String id = endpoint.getEndpointId();
        Assertions.assertEquals(id, "Id");
    }

    @Test
    void getEndpointName() {
        endpoint.setEndpointName("Name");
        String name = endpoint.getEndpointName();
        Assertions.assertEquals(name, "Name");
    }

    @Test
    void getEndpointUrlPattern() {
        endpoint.setEndpointUrlPattern("URL");
        String url = endpoint.getEndpointUrlPattern();
        Assertions.assertEquals(url, "URL");
    }

    @Test
    void getEndpointDescription() {
        endpoint.setEndpointDescription("Desc");
        String desc = endpoint.getEndpointDescription();
        Assertions.assertEquals(desc, "Desc");
    }
}