package com.example.springswagger.swagger;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

@Configuration
public class WebConfig extends WebMvcConfigurationSupport {
        @Override
        public void addViewControllers(ViewControllerRegistry registry) {
                registry.addRedirectViewController("/documentation/v2/api-docs", "/v2/api-docs");
                registry.addRedirectViewController("/v2/api-docs", "/");
                registry.addRedirectViewController("/documentation/swagger-resources/configuration/ui",
                                "/swagger-resources/configuration/ui");
                registry.addRedirectViewController("/swagger-resources/configuration/ui", "/");
                registry.addRedirectViewController("/documentation/swagger-resources/configuration/security",
                                "/swagger-resources/configuration/security");
                registry.addRedirectViewController("/swagger-resources/configuration/security", "/");
                registry.addRedirectViewController("/documentation/swagger-resources", "/swagger-resources");
                registry.addRedirectViewController("/swagger-resources", "/");
                registry.addRedirectViewController("/documentation", "/documentation/swagger-ui.html");
                registry.addRedirectViewController("/documentation/", "/documentation/swagger-ui.html");
        }

        @Override
        public void addResourceHandlers(ResourceHandlerRegistry registry) {
                registry.addResourceHandler("/documentation/swagger-ui.html**")
                                .addResourceLocations("classpath:/META-INF/resources/swagger-ui.html");
                registry.addResourceHandler("/documentation/webjars/**")
                                .addResourceLocations("classpath:/META-INF/resources/webjars/");
        }
}
