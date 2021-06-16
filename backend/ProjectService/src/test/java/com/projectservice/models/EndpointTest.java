package com.projectservice.models;

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
    void endpointIdTest() {
        endpoint.setEndpointId("Id");
        String id = endpoint.getEndpointId();
        Assertions.assertEquals(id, "Id");
    }

    @Test
    void endpointNameTest() {
        endpoint.setEndpointName("Name");
        String name = endpoint.getEndpointName();
        Assertions.assertEquals(name, "Name");
    }

    @Test
    void endpointUrlPatternTest() {
        endpoint.setEndpointUrlPattern("URL");
        String url = endpoint.getEndpointUrlPattern();
        Assertions.assertEquals(url, "URL");
    }

    @Test
    void endpointDescriptionTest() {
        endpoint.setEndpointDescription("Desc");
        String desc = endpoint.getEndpointDescription();
        Assertions.assertEquals(desc, "Desc");
    }
}