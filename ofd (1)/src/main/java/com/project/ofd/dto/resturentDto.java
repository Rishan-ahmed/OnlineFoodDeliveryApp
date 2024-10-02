package com.project.ofd.dto;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class resturentDto {
    private String title;
    private String desc;
    private String id;
}
